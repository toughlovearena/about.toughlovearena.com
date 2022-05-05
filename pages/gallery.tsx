import Link from 'next/link'
import { ReactNode } from 'react';
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { YouTubeGallery } from '../components/YouTubePreview';
import { Articles, YouTubeVideos } from '../data/links';
import { sortArrayOfObjects } from '../utils/list';

interface GalleryItem {
  url: string;
  description: string;
}

const GalleryPreview = (props: { item: GalleryItem; }) => (
  <div style={{
    textAlign: 'center',
    margin: '1em',
  }}>
    <a href={props.item.url} target="_blank">
      <img src={props.item.url} style={{
        height: '20em',
        width: 'auto',
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
    url: 'splash_normal.jpg',
    description: 'Beta splash screen',
  }].map(item => ({
    ...item,
    url: `/asset/${item.url}`,
  }));
  return (
    <Layout title="Gallery">
      <Column>
        <h1>
          Gallery
        </h1>
        <div style={{ textAlign: 'center', }}>
          Click on an image to open in a new tab
        </div>
        {gallery.map((item, i) => (
          <GalleryPreview key={i} item={item} />
        ))}
      </Column>
    </Layout>
  );
};

export default GalleryPage;
