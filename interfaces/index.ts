// You can include shared interfaces/types in a separate file

export type User = {
  id: number
  name: string
}

export interface InternalPageData {
  readonly label: string;
  readonly href: string;
}

export interface NavProps {
  readonly currentHref?: string;
  readonly links: InternalPageData[];
}

export interface ArticleLink {
  site: string;
  author?: string;
  title: string;
  url: string;
  date: string;
}

export interface YouTubeLink {
  channel: string;
  title: string;
  vid: string;
  timestamp?: number;
  date: string
}