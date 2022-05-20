import { GalleryItem } from "../interfaces";

export const GalleryAssets: GalleryItem[] = [{
  file: 'welcomepage_beta.jpg',
  description: 'Beta splash screen',
}, {
  file: 'gameplay1.jpg',
  description: 'Gameplay of Beef vs Noodle',
}, {
  file: 'gameplay2.jpg',
  description: 'Gameplay of Rice vs Pork',
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
  file: 'welcomepage_apf.jpg',
  description: 'April Fools 2021',
}].map(item => ({
  original: `/asset/gallery/maxres/${item.file}`,
  preview: `/asset/gallery/720p/${item.file}`,
  description: item.description,
  when: item.when,
}));
