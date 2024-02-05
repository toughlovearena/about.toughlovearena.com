import Gallery from '../components/gallery/Gallery';
import Layout from '../components/layout/Layout';
import { GalleryAssets } from '../data/gallery';
import { InternalPage } from '../data/nav';

const GalleryPage = () => {
  return (
    <Layout page={InternalPage.Gallery} column={false}>
      <Gallery data={GalleryAssets} />
    </Layout>
  );
};

export default GalleryPage;
