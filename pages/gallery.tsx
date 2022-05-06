import Gallery from '../components/gallery/Gallery';
import Layout from '../components/Layout'
import { GalleryAssets } from '../data/gallery';
import { InternalPage } from '../data/nav';

const GalleryPage = () => {
  return (
    <Layout page={InternalPage.Gallery}>
      <Gallery data={GalleryAssets} />
    </Layout>
  );
};

export default GalleryPage;
