import { InternalPageData } from "../interfaces";

export const InternalPage = {
  Home: {
    href: "/",
    label: '',
  },
  PatchNotes: {
    href: "/log",
    label: 'Patch Notes',
  },
  HallOfFame: {
    href: "/fame",
    label: 'Hall of Fame',
  },
  Gallery: {
    href: "/gallery",
    label: 'Gallery',
  },
  Community: {
    href: "/community",
    label: 'Community',
  },
  About: {
    href: "/about",
    label: 'About',
  },
};
export const InternalPages: InternalPageData[] = [
  InternalPage.PatchNotes,
  InternalPage.HallOfFame,
  InternalPage.Gallery,
  InternalPage.Community,
  InternalPage.About,
];
