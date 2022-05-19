// You can include shared interfaces/types in a separate file

import React from 'react';

export * from './fame';

export interface GalleryItem {
  url: string;
  description: string;
}

export interface InternalPageData {
  readonly label: string;
  readonly subtitle?: React.ReactNode;
  readonly href: string;
}

export interface NavProps {
  readonly currentHref?: string;
  readonly links: InternalPageData[];
}

export interface ArticleLink {
  site: string;
  author: string;
  title: string;
  url: string;
  date: string;
  quote: string;
}

export interface YouTubeLink {
  channel: string;
  title: string;
  vid: string;
  timestamp?: number;
  date: string
}
