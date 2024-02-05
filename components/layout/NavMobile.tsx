import Link from 'next/link';
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import { ExternalLink } from '../ExternalLink';
import styles from './NavMobile.module.css';

export const NavMobile = ({ currentHref, links, }: NavProps) => (
  <nav className={styles.container}>
    <div className={styles.navLogo}>
      <Link href={InternalPage.Home.href} className={styles.navAnchor}>
        <img src="/logo_v01.png" />
      </Link>
    </div>
    <div className={styles.navLinks}>
      {links.map((li, i) => (
        <Link key={i} href={li.href} className={styles.navAnchor}>
          <div className={styles.navLink}>
            {currentHref === li.href ? (
              <b>{li.label}</b>
            ) : (
              <span>{li.label}</span>
            )}
          </div>
        </Link>
      ))}
      <ExternalLink className={styles.navAnchor} href="https://toughlovearena.com">
        <div className={styles.navLink}>
          <b><u>PLAY</u></b>
        </div>
      </ExternalLink>
    </div>
  </nav>
)
