import { InternalPageData } from "../interfaces";

export const InternalPage = {
  About: {
    href: "/",
    label: '',
  },
  PatchNotes: {
    href: "/log",
    label: 'Patch Notes',
  },
  Gallery: {
    href: "/gallery",
    label: 'Gallery',
  },
  Press: {
    href: "/press",
    label: 'Press',
  },
};
export const InternalPages: InternalPageData[] = [
  InternalPage.PatchNotes,
  InternalPage.Gallery,
  InternalPage.Press,
];
