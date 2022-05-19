import { InternalPageData } from "../interfaces";

export const InternalPage = {
  Home: {
    href: "/",
    label: '',
  },
  PatchNotes: {
    href: "/log",
    label: 'Patch Notes',
    subtitle: `Every game update since the launch of the public beta in January 2021`,
  },
  HallOfFame: {
    href: "/fame",
    label: 'Hall of Fame',
    subtitle: `Here we celebrate and immortalize all of the Tough Love Arena champions`,
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
