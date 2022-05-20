import { EventType } from "../../interfaces";

const EventColor = {
  [EventType.Stream]: '#9747ff',
  [EventType.Tournament]: '#ff870f',
  [EventType.Meetup]: '#ed1c40',
};
export function getEventColor(type: EventType | undefined) {
  return (type && EventColor[type]) ?? '#707070';
}
