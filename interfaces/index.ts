// You can include shared interfaces/types in a separate file

export type User = {
  id: number
  name: string
}

export interface ArticleLink {
  author: string;
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
