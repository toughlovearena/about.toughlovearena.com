import { CSSProperties, useEffect, useState } from "react";
import { AllEvents, EventData, EventType } from "../../interfaces";
import { sortArrayOfObjects } from "../../utils/list";
import { EventBlock, getEventColor, getEventLabel } from "./EventBlock";
import styles from './EventList.module.css';

function FilterLabel(props: {
  filter: EventType | undefined,
  setFilter(eventType: EventType | undefined): void;
  eventType: EventType | undefined,
}) {
  const {
    filter,
    setFilter,
    eventType,
  } = props;
  const selected = filter === eventType;
  const style: CSSProperties = selected ? {
    fontWeight: 600,
    color: 'white',
    backgroundColor: getEventColor(eventType),
    borderColor: getEventColor(eventType),
  } : {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
  };
  return (
    <div
      className={styles.filterButton}
      style={style}
      onClick={() => setFilter(eventType)}
    >{getEventLabel(props.eventType)}</div>
  )
}

export const EventList = (props: { events: EventData[]; }) => {
  const [showPast, setShowPast] = useState(false);
  const [filter, setFilter] = useState<EventType | undefined>();

  // now needs to start as undefined due to Server Side Render
  const [now, setNow] = useState<Date | undefined>();

  useEffect(() => {
    setTimeout(() => setNow(new Date()), 0);
  }, [setNow]);

  let toFilter: EventData[] = [];
  if (now !== undefined) {
    const all = sortArrayOfObjects(props.events, ed => ed.start.getTime());
    toFilter = showPast ? all.filter(e => e.end <= now).reverse() : all.filter(e => e.end > now);
  }
  const events = filter ? toFilter.filter(e => e.type === filter) : toFilter;
  const filterProps = { filter, setFilter, };

  return (
    <div className={styles.container}>
      {/* todo add link to google form for submission */}
      <div className={styles.filterSelect}>
        <FilterLabel {...filterProps} eventType={undefined}></FilterLabel>
        <FilterLabel {...filterProps} eventType={EventType.Tournament}></FilterLabel>
        <FilterLabel {...filterProps} eventType={EventType.Stream}></FilterLabel>
        <FilterLabel {...filterProps} eventType={EventType.Meetup}></FilterLabel>
      </div>
      <div className={styles.filterSelect}>
        <div className={styles.filterButtonGap}></div>
        <div
          className={[styles.filterButton, styles.filterPast].join(' ')}
          onClick={() => setShowPast(!showPast)}
        >
          Switch to {showPast ? 'Upcoming' : 'Past'} Events
        </div>
        <div className={styles.filterButtonGap}></div>
      </div>
      {events.length ? (
        <div className={styles.list}>
          {events.map(e => (
            <EventBlock key={e.eid} event={e} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          {now === undefined ? 'loading...' : (
            <div>
              no events found
              <br/>
              please try a different filter
            </div>
          )}
        </div>
      )}
    </div>
  );
}
