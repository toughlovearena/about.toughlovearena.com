import { Column } from '../components/Column';
import Layout from '../components/layout/Layout'
import { YouTubeGallery } from '../components/YouTubePreview';
import { YouTubeVideos } from '../data/links';
import { InternalPage } from '../data/nav';
import { sortArrayOfObjects } from '../utils/list';

const CommunityPage = () => {
  const videos = sortArrayOfObjects(YouTubeVideos, art => art.date).reverse();
  return (
    <Layout page={InternalPage.Community}>
      <Column>
        <h1>
          YouTube Videos featuring Tough Love Arena
        </h1>
        <YouTubeGallery links={videos} />
      </Column>
    </Layout>
  );
};

export default CommunityPage;
