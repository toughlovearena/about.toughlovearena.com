import Link from 'next/link';
import { CSSProperties } from 'react';
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import { ExternalLink } from '../ExternalLink';
import styles from './NavMobile.module.css';

const NavMobileComp = ({ currentHref, links, style }: NavProps & { style: CSSProperties }) => (
  <nav className={styles.container} style={style}>
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

export const NavMobile = (props: NavProps) => (
  <>
    <NavMobileComp {...props} style={{ visibility: 'hidden', }} />
    <NavMobileComp {...props} style={{ position: 'absolute', }} />
  </>
)
