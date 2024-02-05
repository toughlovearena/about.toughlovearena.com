import { AboutInfo } from '../components/about/AboutInfo';
import Layout from '../components/layout/Layout';
import { InternalPage } from '../data/nav';

const AboutPage = () => {
  return (
    <Layout page={InternalPage.About} column={true}>
      <AboutInfo />
    </Layout>
  );
};

export default AboutPage;
