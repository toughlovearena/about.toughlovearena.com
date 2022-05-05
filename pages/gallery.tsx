import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { InternalPage } from '../data/pages';
import styles from './gallery.module.css'

interface GalleryItem {
  url: string;
  description: string;
}

const GalleryPreview = (props: { item: GalleryItem; }) => (
  <div style={{
    textAlign: 'center',
    margin: '1em',
    width: '350px',
  }}>
    <a href={props.item.url} target="_blank">
      <img src={props.item.url} style={{
        height: 'auto',
        width: '100%',
      }} />
    </a>
    <div>
      <i>{props.item.description}</i>
    </div>
  </div>
)

const GalleryPage = () => {
  const gallery: GalleryItem[] = [{
    url: 'gameplay1.jpg',
    description: 'Gameplay of Beef vs Noodle',
  }, {
    url: 'gameplay2.jpg',
    description: 'Gameplay of Rice vs Pork',
  }, {
    url: 'welcomepage_beta.jpg',
    description: 'Beta splash screen',
  }, {
    url: 'welcomepage_apf.jpg',
    description: 'April Fools 2021',
  }, {
    url: 'welcomepage_halloween.jpg',
    description: 'Halloween 2021',
  }, {
    url: 'welcomepage_bday.jpg',
    description: 'Birthday 2022',
  }, {
    url: 'welcomepage_bday.jpg',
    description: 'Birthday 2022',
  }, {
    url: '2021_promo_6month1.jpg',
    description: 'Promo art for 6month Anniversary Tournament',
  }, {
    url: '2021_promo_6month2.jpg',
    description: 'Promo art for 6month Anniversary Tournament',
  }, {
    url: '2021_promo_6month3.png',
    description: 'Promo art for 6month Anniversary Tournament',
  }, {
    url: '2021_promo_halloween.jpg',
    description: 'Promo art for Halloween Tournament',
  }, {
    url: '2021_promo_balancepatch.jpg',
    description: 'Promo art for Balance Patch event',
  }, {
    url: '2021_promo_qr4.jpg',
    description: 'Promo art for Quarantined Report #4',
  }, {
    url: '2022_promo_bday_tournament.jpg',
    description: 'Promo art for Birthday Tournament',
  }, {
    url: '2022_promo_bday.jpg',
    description: 'Promo art for Birthday Tournament',
  }, {
    url: '2022_promo_bday_textless.jpg',
    description: 'Promo art for Birthday Tournament (textless)',
  }, {
    url: '2022_promo_normal_tournament.jpeg',
    description: 'Promo art for April Fools Tournament',
  }, {
    url: '2022_promo_apf_tournament.jpg',
    description: 'Promo art for April Fools Tournament',
  }, {
    url: '2022_promo_paxeast.jpg',
    description: 'Promo art for PAX East',
  }].map(item => ({
    ...item,
    url: `/asset/${item.url}`,
  }));
  return (
    <Layout page={InternalPage.Gallery}>
      <Column>
        <div className={styles.gallery}>
          {gallery.map((item, i) => (
            <GalleryPreview key={i} item={item} />
          ))}
        </div>
      </Column>
    </Layout>
  );
};

export default GalleryPage;
