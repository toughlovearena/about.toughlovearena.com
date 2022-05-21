import { CSSProperties, useState } from "react";
import { AllEvents, EventType } from "../../interfaces";
import { EventBlock, getEventColor } from "./EventBlock";
import styles from './EventList.module.css';

function FilterLabel(props: {
  filter: EventType | undefined,
  setFilter(eventType: EventType | undefined): void;
  eventType: EventType | undefined,
  label: string,
}) {
  const {
    filter,
    setFilter,
    eventType,
    label,
  } = props;
  const selected = filter === eventType;
  const style: CSSProperties = {
    borderColor: getEventColor(eventType),
    ...(selected ? {
      borderWidth: '0.4em',
    } : {}),
  };
  return (
    <div
      className={styles.category}
      style={style}
      onClick={() => setFilter(eventType)}
    >{label}</div>
  )
}

export const EventList = (props: { events: AllEvents; }) => {
  const [showPast, setShowPast] = useState(false);
  const [filter, setFilter] = useState(undefined as EventType | undefined);

  const toFilter = showPast ? props.events.past : props.events.upcoming;
  const events = filter ? toFilter.filter(e => e.type === filter) : toFilter;

  return (
    <div className={styles.container}>
      {/* todo add link to google form for submission */}
      <div className={styles.categories}>
        <FilterLabel filter={filter} setFilter={setFilter} eventType={undefined} label='All'></FilterLabel>
        <FilterLabel filter={filter} setFilter={setFilter} eventType={EventType.Tournament} label='Tournament'></FilterLabel>
        <FilterLabel filter={filter} setFilter={setFilter} eventType={EventType.Stream} label='Stream'></FilterLabel>
        <FilterLabel filter={filter} setFilter={setFilter} eventType={EventType.Meetup} label='Offline'></FilterLabel>
      </div>
      <div className={styles.categories}>
        <div
          className={styles.category}
          style={{
            borderColor: 'seagreen',
            width: '20em',
          }}
          onClick={() => setShowPast(!showPast)}
        >
          Switch to {showPast ? 'Upcoming' : 'Past'} Events
        </div>
      </div>
      {events ? (
        events.length ? (
          <div>
            {events.map((e, ei) => (
              <EventBlock key={ei} event={e} />
            ))}
          </div>
        ) : (
          <div>
            <i>no events found</i>
          </div>
        )
      ) : (
        <div>
          <i>loading...</i>
        </div>
      )}
    </div>
  );
}
