import { EventData, EventDTO, EventWhenDTO } from '../interfaces';
import { flatten } from './list';

// https://stackoverflow.com/a/57842203
function dateWithTimeZone(timeZone: string, year: number, month: number, day: number, hour: number, minute: number, second: number) {
  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: "UTC" }));
  const tzDate = new Date(date.toLocaleString('en-US', { timeZone: timeZone }));
  const offset = utcDate.getTime() - tzDate.getTime();
  date.setTime(date.getTime() + offset);
  return date;
};
function parseEventWhen(dto: EventWhenDTO): { start: Date, end: Date } {
  const [yyyy, mm, dd] = dto.date.split('/').map(s => parseFloat(s));
  const [hour, min] = dto.time.split(':').map(s => parseFloat(s));
  const start = dateWithTimeZone('America/New_York', yyyy, mm, dd, hour, min, 0);
  const end = new Date(start.getTime() + (dto.hours * 60 * 60 * 1000));
  return { start, end };
}
function convertEventDTO(dto: EventDTO): EventData[] {
  return flatten(dto.when.map<EventData[]>(w => {
    const { start, end } = parseEventWhen(w);
    const eventData: EventData = {
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

    const repeats = (dto.repeat ?? []).map<EventData>(dateStr => {
      const { start, end } = parseEventWhen({
        ...w,
        date: dateStr,
      });
      return {
        ...eventData,
        eid: `${start.toISOString()}-${dto.title}`,
        start,
        end,
      };
    });

    const series = (dto.series ?? []).map<EventData[]>(newEvent => convertEventDTO({
      ...dto,
      series: [],
      ...newEvent,
      when: newEvent.when
        ? newEvent.when.map(when => ({
          ...w,
          ...when,
        }))
        : dto.when,
    })).flat();

    return [eventData, ...repeats, ...series];
  }));
}

export function unpackEvents(dtos: EventDTO[]): EventData[] {
  return flatten(dtos.map(convertEventDTO));
}
