export interface VersionLog {
  v: string;
  date: string;
  notes: string[];
}
export interface ChangelogData {
  versions: VersionLog[];
}
