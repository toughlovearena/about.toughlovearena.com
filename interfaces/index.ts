// You can include shared interfaces/types in a separate file

import React from 'react';

export * from './changelog';
export * from './events';
export * from './fame';

export interface GalleryItem {
  original: string;
  preview: string;
  description: string;
  when?: string;
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
