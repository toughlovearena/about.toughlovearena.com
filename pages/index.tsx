import Hero from '../components/Hero'
import { SocialButton } from '../components/SocialButton'
import Layout from '../components/layout/Layout'
import { LayoutColumn } from '../components/layout/LayoutColumn'
import styles from '../components/layout/NavDesktop.module.css'
import { Social } from '../data/links'

const IndexPage = () => (
  <Layout column={false}>
    <Hero />
    <LayoutColumn>
      <section className={styles.navSocials}>
        {Social.map(link =>
          <SocialButton
            key={link.url}
            img={link.imageSrc}
            url={link.url}
          />
        )}
      </section>
    </LayoutColumn>
  </Layout>
)

export default IndexPage
