export enum HallOfFameType {
  Official = "official",
  Community = "community",
}
export const DefaultHallOfFameType = HallOfFameType.Community;

export interface HallOfFameLink {
  label: string;
  url: string;
}

export interface HallOfFameEntry {
  date: string;
  name: string;
  entrants: number;
  winner?: string;
  category?: HallOfFameType;
  challonge?: string;
  youtube?: string;
  links?: HallOfFameLink[];
}

export interface HallOfFameData {
  events: HallOfFameEntry[];
}

export const ViewAll = "all";
export type ViewOption =
  | typeof ViewAll
  | HallOfFameType.Official
  | HallOfFameType.Community;
export const Options: ViewOption[] = [
  ViewAll,
  HallOfFameType.Official,
  HallOfFameType.Community,
];
export function OptionName(vo: ViewOption) {
  if (vo === ViewAll) {
    return "All";
  }
  return {
    [HallOfFameType.Official]: "🍋 Official",
    [HallOfFameType.Community]: "Community",
  }[vo];
}
