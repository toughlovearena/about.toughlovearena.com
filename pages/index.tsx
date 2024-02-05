import Hero from '../components/Hero'
import { SocialButton } from '../components/SocialButton'
import Layout from '../components/layout/Layout'
import layoutStyles from '../components/layout/Layout.module.css'
import styles from '../components/layout/NavDesktop.module.css'
import { Social } from '../data/links'

const IndexPage = () => (
  <Layout>
    <Hero />
    <div className={[layoutStyles.container, layoutStyles.pattern].join(' ')}>
      <div className={layoutStyles.inner}>
        <section className={styles.navSocials}>
          {Social.map(link =>
            <SocialButton
              key={link.url}
              img={link.imageSrc}
              url={link.url}
            />
          )}
        </section>
      </div>
    </div>
  </Layout>
)

export default IndexPage
