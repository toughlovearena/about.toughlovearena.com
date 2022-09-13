import Link from 'next/link'
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import { ExternalLink } from '../ExternalLink';
import styles from './NavMobile.module.css';

export default ({ currentHref, links, }: NavProps) => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link href={InternalPage.Home.href}>
          <a className={styles.navAnchor}>
            <img src="/logo_v01.png" />
          </a>
        </Link>
      </div>
      <div className={styles.navLinks}>
        {links.map((li, i) => (
          <Link key={i} href={li.href}>
            <a className={styles.navAnchor}>
              <div className={styles.navLink}>
                {currentHref === li.href ? (
                  <b>{li.label}</b>
                ) : (
                  <span>{li.label}</span>
                )}
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
