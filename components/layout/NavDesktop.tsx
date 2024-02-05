import Link from 'next/link';
import { CSSProperties } from 'react';
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import { ExternalLink } from '../ExternalLink';
import styles from './NavDesktop.module.css';

const NavDesktopComp = ({ currentHref, links, style }: NavProps & { style: CSSProperties }) => (
  <nav className={styles.container} style={style}>
    <div className={styles.navLeft}>
      <Link href={InternalPage.Home.href} className={styles.navAnchor}>
        <img src="/logo_v01.png" />
      </Link>
    </div>
    <div className={styles.navRight}>
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
          <b><u>PLAY</u></b>
        </div>
      </ExternalLink>
    </div>
  </nav>
)

export const NavDesktop = (props: NavProps) => (
  <>
    <NavDesktopComp {...props} style={{ visibility: 'hidden', }} />
    <NavDesktopComp {...props} style={{ position: 'fixed', }} />
  </>
)
