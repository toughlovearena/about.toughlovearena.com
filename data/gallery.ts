import { GalleryItem } from "../interfaces";

export const GalleryAssets: GalleryItem[] = [{
  file: 'gameplay1.jpg',
  description: 'Gameplay of Beef vs Noodle',
}, {
  file: 'gameplay2.jpg',
  description: 'Gameplay of Rice vs Pork',
}, {
  file: 'welcomepage_beta.jpg',
  description: 'Beta splash screen',
}, {
  file: '2023_promo_wonderville.jpg',
  description: 'Promo art for Wonderville',
  when: 'January 2023',
}, {
  file: '2022_promo_garlic_halloween.jpg',
  description: 'Promo art for Halloween Tournament',
  when: 'October 2022',
}, {
  file: '2022_promo_evo.jpg',
  description: 'Promo art for EVO',
  when: 'August 2022',
}, {
  file: '2022_promo_tlg_69.gif',
  description: 'Tough Love Gauntlet #69',
  when: 'June 2022',
}, {
  file: '2022_promo_combobreaker.jpg',
  description: 'Promo art for Combo Breaker',
  when: 'May 2022',
}, {
  file: '2022_promo_paxeast.jpg',
  description: 'Promo art for PAX East',
  when: 'April 2022',
}, {
  file: '2022_promo_normal_tournament.jpg',
  description: 'Fake promo art for April Fools Tournament',
  when: 'April 2022',
}, {
  file: '2022_promo_apf_tournament.jpg',
  description: 'Surprise promo art for April Fools Tournament',
  when: 'April 2022',
}, {
  file: '2022_promo_tlg_50.gif',
  description: 'Tough Love Gauntlet #50',
  when: 'February 2022',
}, {
  file: '2022_promo_bday.jpg',
  description: 'Promo art for Birthday Tournament',
  when: 'January 2022',
}, {
  file: '2021_promo_qr4.jpg',
  description: 'Promo art for Quarantined Report #4',
  when: 'November 2021',
}, {
  file: '2021_promo_balancepatch.jpg',
  description: 'Promo art for Balance Patch event',
  when: 'October 2021',
}, {
  file: '2021_promo_desktop.jpg',
  description: 'Promo art for desktop application',
  when: 'September 2021',
}, {
  file: 'stage_notebook.jpg',
  description: 'Notebook Stage',
}, {
  file: 'stage_apartment.jpg',
  description: 'Apartment Stage',
}, {
  file: 'stage_playground.jpg',
  description: 'Playground Stage',
}, {
  file: 'stage_grocery.jpg',
  description: 'Grocery Store Stage',
}, {
  file: 'stage_parkinglot.jpg',
  description: 'Parking Lot Stage',
}, {
  file: 'stage_random.jpg',
  description: 'Random Stage',
}, {
  file: 'welcomepage_bday.jpg',
  description: 'Birthday Theme',
}, {
  file: 'welcomepage_apf.jpg',
  description: 'April Fools Theme',
}, {
  file: 'welcomepage_halloween.jpg',
  description: 'Halloween Theme',
}].map(item => ({
  original: `/asset/gallery/maxres/${item.file}`,
  preview: `/asset/gallery/720p/${item.file}`,
  description: item.description,
  when: item.when,
}));
