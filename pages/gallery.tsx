import Gallery from '../components/gallery/Gallery';
import Layout from '../components/layout/Layout'
import { GalleryAssets } from '../data/gallery';
import { InternalPage } from '../data/nav';

const GalleryPage = () => {
  return (
    <Layout page={InternalPage.Gallery} hideTitle={true}>
      <Gallery data={GalleryAssets} />
    </Layout>
  );
};

export default GalleryPage;
