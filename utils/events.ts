import { AllEvents, EventData, EventDTO } from '../interfaces';
import { flatten, sortArrayOfObjects } from './list';

// https://stackoverflow.com/a/57842203
function dateWithTimeZone(timeZone: string, year: number, month: number, day: number, hour: number, minute: number, second: number) {
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timeZone }));
  const offset = utcDate.getTime() - tzDate.getTime();
  date.setTime(date.getTime() + offset);
  return date;
};
function convertEventDTO(dto: EventDTO): EventData[] {
  return dto.when.map<EventData>(w => {
    const [yyyy, mm, dd] = w.date.split('/').map(s => parseFloat(s));
    const [hour, min] = w.time.split(':').map(s => parseFloat(s));
    const start = dateWithTimeZone('America/New_York', yyyy, mm, dd, hour, min, 0);
    const end = new Date(start.getTime() + (w.hours * 60 * 60 * 1000));
    return {
      eid: `${start.toISOString()}-${dto.title}`,

      title: dto.title,
      type: dto.type,
      description: dto.description,

      image: dto.image,
      twitch: dto.twitch,
      challonge: dto.challonge,
      matcherino: dto.matcherino,
      links: dto.links ?? [],

      start,
      end,
    };
  });
}

export function unpackEvents(dtos: EventDTO[]): EventData[] {
  return flatten(dtos.map(convertEventDTO));
}
