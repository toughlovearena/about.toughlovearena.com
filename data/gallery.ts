import { GalleryItem } from "../interfaces";

export const GalleryAssets: GalleryItem[] = [{
  url: 'welcomepage_beta.jpg',
  description: 'Beta splash screen',
}, {
  url: 'gameplay1.jpg',
  description: 'Gameplay of Beef vs Noodle',
}, {
  url: 'gameplay2.jpg',
  description: 'Gameplay of Rice vs Pork',
}, {
  url: '2022_promo_combobreaker.jpg',
  description: 'Promo art for Combo Breaker',
  when: 'May 2022',
}, {
  url: '2022_promo_paxeast.jpg',
  description: 'Promo art for PAX East',
  when: 'April 2022',
}, {
  url: '2022_promo_normal_tournament.jpeg',
  description: 'Fake promo art for April Fools Tournament',
  when: 'April 2022',
}, {
  url: '2022_promo_apf_tournament.jpg',
  description: 'Surprise promo art for April Fools Tournament',
  when: 'April 2022',
}, {
  url: '2022_promo_bday.jpg',
  description: 'Promo art for Birthday Tournament',
  when: 'January 2022',
}, {
  url: '2021_promo_qr4.jpg',
  description: 'Promo art for Quarantined Report #4',
  when: 'November 2021',
}, {
  url: '2021_promo_balancepatch.jpg',
  description: 'Promo art for Balance Patch event',
  when: 'October 2021',
}, {
  url: 'welcomepage_apf.jpg',
  description: 'April Fools 2021',
}].map(item => ({
  ...item,
  url: `/asset/${item.url}`,
}));
