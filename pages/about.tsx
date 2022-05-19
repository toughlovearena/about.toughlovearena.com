import React from 'react';
import { AboutInfo } from '../components/about/AboutInfo';
import Layout from '../components/Layout'
import { InternalPage } from '../data/nav';

const AboutPage = () => {
  return (
    <Layout page={InternalPage.About}>
      <AboutInfo />
    </Layout>
  );
};

export default AboutPage;
