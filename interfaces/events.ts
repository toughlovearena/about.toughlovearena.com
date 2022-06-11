
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

  start: Date;
  end: Date;
}

export interface AllEvents {
  past: EventData[];
  upcoming: EventData[];
  all: EventData[];
}

interface EventWhenDTO {
  date: string;
  time: string;
  hours: number;
}
export interface EventDTO {
  title: string;
  description: string;
  type: EventType;

  image?: string;
  twitch?: string;
  challonge?: string;
  matcherino?: string;

  when: EventWhenDTO[];
}
export interface EventsYaml {
  events: EventDTO[];
}
