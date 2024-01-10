
export enum EventType {
  Stream = 'stream',
  Tournament = 'tournament',
  Meetup = 'meetup',
};

export interface EventData {
  eid: string;

  title: string;
  description: string;
  type: EventType;

  image?: string;
  twitch?: string;
  challonge?: string;
  matcherino?: string;
  links: LinkDTO[];

  start: Date;
  end: Date;
}

export interface AllEvents {
  past: EventData[];
  upcoming: EventData[];
  all: EventData[];
}

export interface EventWhenDTO {
  date: string;
  time: string;
  hours: number;
}
interface LinkDTO {
  label: string;
  url: string;
}
export interface EventDTO {
  title: string;
  description: string;
  type: EventType;

  image?: string;
  twitch?: string;
  challonge?: string;
  matcherino?: string;
  links?: LinkDTO[];

  when: EventWhenDTO[];
  repeat?: string[];
  series?: Partial<EventDTO>[];
}
export interface EventsYaml {
  events: EventDTO[];
}
