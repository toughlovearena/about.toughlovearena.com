import Link from 'next/link'
import { Column } from '../components/Column'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { InternalPage } from '../data/nav'

const IndexPage = () => (
  <Layout page={InternalPage.About}>
    <Hero />
    <Column>
      <h3>Testing, please ignore</h3>
      <div>
        <Link href="/users">
          <a>Users List</a>
        </Link>
      </div>
      <div>
        <a href="/api/users">
          Users API
        </a>
      </div>
    </Column>
  </Layout>
)

export default IndexPage
