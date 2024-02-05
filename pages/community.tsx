import { Community } from '../components/community/Community';
import Layout from '../components/layout/Layout';
import { InternalPage } from '../data/nav';

const CommunityPage = () => {
  return (
    <Layout page={InternalPage.Community} column={true}>
      <Community />
    </Layout>
  );
};

export default CommunityPage;
