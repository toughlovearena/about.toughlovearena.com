import Link from 'next/link'
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import { ExternalLink } from '../ExternalLink';
import styles from './NavDesktop.module.css';
import { Social } from '../../data/links';
import { SocialButton } from '../SocialButton';

export default ({ currentHref, links, }: NavProps) => (
  <div className={styles.container}>
    <div className={styles.spacer}></div>
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <Link href={InternalPage.Home.href}>
          <a className={styles.navAnchor}>
            <img src="/logo_v01.png" />
          </a>
        </Link>
        {Social.map(link =>
          <SocialButton
            key={link.url}
            className={styles.navSocial}
            img={link.imageSrc}
            url={link.url}
          />
        )}
      </div>
      <div className={styles.navRight}>
        {links.map((li, i) => (
          <Link key={i} href={li.href}>
            <a className={styles.navAnchor}>
              <div className={styles.navLink} style={currentHref === li.href ? {
                fontWeight: 'bold',
              } : {}}>
                {li.label}
              </div>
            </a>
          </Link>
        ))}
        <ExternalLink className={styles.navAnchor} href="https://toughlovearena.com">
          <div className={styles.navLink}>
            Play Now!
          </div>
        </ExternalLink>
      </div>
    </nav>
  </div>
)
