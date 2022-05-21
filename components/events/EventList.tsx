import { CSSProperties, useState } from "react";
import { AllEvents, EventType } from "../../interfaces";
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

export const EventList = (props: { events: AllEvents; }) => {
  const [showPast, setShowPast] = useState(false);
  const [filter, setFilter] = useState(undefined as EventType | undefined);

  const toFilter = showPast ? props.events.past : props.events.upcoming;
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
          {events.map((e, ei) => (
            <EventBlock key={ei} event={e} />
          ))}
        </div>
      ) : (
        <div>
          <i>no events found</i>
        </div>
      )}
    </div>
  );
}
