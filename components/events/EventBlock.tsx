import { EventData, EventType } from "../../interfaces";
import * as calendarLink from "calendar-link";
import styles from './EventBlock.module.css';

const EventColor = {
  [EventType.Stream]: '#9747ff',
  [EventType.Tournament]: '#ff870f',
  [EventType.Meetup]: '#ed1c40',
};
export function getEventColor(type: EventType | undefined) {
  return (type && EventColor[type]) ?? '#707070';
}

interface Link {
  name: string;
  url: string;
}

export function EventBlock(props: { event: EventData }) {
  const { event } = props;

  const links: Link[] = [];
  let calEventDescription = event.description ? event.description + '\n\n' : '';
  if (event.challonge) {
    const url = event.challonge.includes('challonge.com') ? event.challonge : ('https://challonge.com/' + event.challonge);
    links.push({
      name: 'challonge',
      url,
    });
    calEventDescription += `${url}\n`;
  }
  if (event.matcherino) {
    const url = 'https://matcherino.com/tournaments/' + event.matcherino;
    links.push({
      name: 'matcherino',
      url,
    });
    calEventDescription += `${url}\n`;
  }
  if (event.twitch) {
    const url = 'https://twitch.tv/' + event.twitch;
    links.push({
      name: 'twitch',
      url,
    });
    calEventDescription += `${url}\n`;
  }

  const calEvent: calendarLink.CalendarEvent = {
    title: event.title,
    description: calEventDescription,
    start: event.start,
    end: event.end,
  };
  return (
    <div className={styles.container} style={{ borderColor: getEventColor(event.type), }}>
      <div className={styles.title}>
        {event.title}
      </div>
      <div>
        {event.description}
      </div>
      {links.length ? (
        <div>
          {links.map((link, index) => (
            <span key={index} >
              {index > 0 && ' / '}
              <a rel="noreferrer" target="_blank" href={link.url}>{link.name}</a>
            </span>
          ))}
        </div>
      ) : undefined}
      <div className={styles.time}>
        <div className={styles.start}>
          {event.start.toLocaleString()}
        </div>
        <div>
          <a rel="noreferrer" target="_blank" href={calendarLink.google(calEvent)}>gcal</a>
          &nbsp;/&nbsp;
          <a rel="noreferrer" target="_blank" href={calendarLink.ics(calEvent)}>ics</a>
          &nbsp;/&nbsp;
          <a rel="noreferrer" target="_blank" href={calendarLink.outlook(calEvent)}>outlook</a>
        </div>
      </div>
      {event.image && (
        <img
          className={styles.brand}
          src={'images/' + event.image}
        />
      )}
    </div>
  );
}
