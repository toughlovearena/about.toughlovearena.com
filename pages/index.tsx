import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { InternalPage } from '../data/nav'

const IndexPage = () => (
  <Layout page={InternalPage.About}>
    <Hero />
  </Layout>
)

export default IndexPage
