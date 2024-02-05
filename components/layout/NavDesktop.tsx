import Link from 'next/link';
import { Social } from '../../data/links';
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import { ExternalLink } from '../ExternalLink';
import { SocialButton } from '../SocialButton';
import styles from './NavDesktop.module.css';

export default ({ currentHref, links, }: NavProps) => (
  <div className={styles.container}>
    <div className={styles.spacer}></div>
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <Link href={InternalPage.Home.href} className={styles.navAnchor}>
          <img src="/logo_v01.png" />
        </Link>
      </div>
      <div className={styles.navRight}>
        <section>
          {links.map((li, i) => (
            <Link key={i} href={li.href} className={styles.navAnchor}>
              <div className={styles.navLink} style={currentHref === li.href ? {
                fontWeight: 'bold',
              } : {}}>
                {li.label}
              </div>
            </Link>
          ))}
          <ExternalLink className={styles.navAnchor} href="https://toughlovearena.com">
            <div className={styles.navLink}>
              Play Now!
            </div>
          </ExternalLink>
        </section>
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
    </nav>
  </div>
)
