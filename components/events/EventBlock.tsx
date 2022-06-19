import { EventData, EventType } from "../../interfaces";
import * as calendarLink from "calendar-link";
import styles from './EventBlock.module.css';
import { CSSProperties } from "react";
import { ExternalLink } from "../ExternalLink";

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
  links.push(...event.links.map(linkdto => ({
    name: linkdto.label,
    url: linkdto.url,
  })));

  const calEvent: calendarLink.CalendarEvent = {
    title: event.title,
    description: calEventDescription,
    start: event.start,
    end: event.end,
  };

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
          src={'/asset/events/' + (event.image ?? 'unknown.png')}
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
                    <ExternalLink href={link.url}>{link.name}</ExternalLink>
                  </span>
                ))}
              </div>
            ) : undefined}
          </div>
          <div>
            <ExternalLink href={calendarLink.google(calEvent)}>gcal</ExternalLink>
            &nbsp;/&nbsp;
            <ExternalLink href={calendarLink.ics(calEvent)}>ics</ExternalLink>
            &nbsp;/&nbsp;
            <ExternalLink href={calendarLink.outlook(calEvent)}>outlook</ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}
