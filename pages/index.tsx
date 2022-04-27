import Link from 'next/link'
import { Column } from '../components/Column'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="About">
    <Column>
      <p>
        Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play!
      </p>
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
