import Link from 'next/link'
import { Column } from '../components/Column'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="About">
    <Column>
      <p>
        Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play!
      </p>
    </Column>
  </Layout>
)

export default IndexPage
