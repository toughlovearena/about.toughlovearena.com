import { EventData, EventType } from "../../interfaces";
import * as calendarLink from "calendar-link";
import styles from './EventBlock.module.css';
import { CSSProperties } from "react";

const EventLabel = {
  [EventType.Tournament]: 'Tournament',
  [EventType.Stream]: 'Stream',
  [EventType.Meetup]: 'Offline',
};
export function getEventLabel(type: EventType | undefined) {
  return (type && EventLabel[type]) ?? 'All';
}
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
  let imageSrc = event.image ?? 'unknown.png';

  // todo temp workaround
  if (imageSrc === 'fruitisle.png') {
    imageSrc = 'fruitisle.jpg';
  }
  if (imageSrc === 'tng.png') {
    imageSrc = 'toughlovegauntlet.jpg';
  }

  const boxStyle: CSSProperties = {
    border: `2px solid ${getEventColor(event.type)}`,
    borderRadius: '8px',
    boxShadow: `4px 4px ${getEventColor(event.type)}`,
    marginRight: '4px', // needs to match boxShadow
    overflow: 'hidden',
  }

  return (
    <div className={styles.container} style={boxStyle}>
      <div className={styles.brand}>
        <img
          src={'/asset/events/' + imageSrc}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          {event.title}
        </div>
        <div className={styles.description}>
          {event.description}
        </div>
        <div className={styles.time}>
          <div className={styles.start}>
            {event.start.toLocaleString()}
          </div>
        </div>
        <div className={styles.links}>
          <div>
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
          </div>
          <div>
            <a rel="noreferrer" target="_blank" href={calendarLink.google(calEvent)}>gcal</a>
            &nbsp;/&nbsp;
            <a rel="noreferrer" target="_blank" href={calendarLink.ics(calEvent)}>ics</a>
            &nbsp;/&nbsp;
            <a rel="noreferrer" target="_blank" href={calendarLink.outlook(calEvent)}>outlook</a>
          </div>
        </div>
      </div>
    </div>
  );
}