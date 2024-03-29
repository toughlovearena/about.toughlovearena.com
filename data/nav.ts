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
  Events: {
    href: "/events",
    label: 'Events',
    subtitle: `All dates and times are displayed in your local timezone`,
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
};
export const InternalPages: InternalPageData[] = [
  InternalPage.PatchNotes,
  InternalPage.Events,
  InternalPage.HallOfFame,
  InternalPage.Community,
  InternalPage.Gallery,
];
