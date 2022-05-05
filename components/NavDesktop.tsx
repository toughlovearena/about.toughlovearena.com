import Link from 'next/link'
import { NavLink } from '../interfaces';
import styles from './NavDesktop.module.css';

export default ({ links, }: { links: NavLink[], }) => (
  <div className={styles.container}>
    <div className={styles.spacer}></div>
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <Link href="/">
          <img src="/logo_v01.png" />
        </Link>
      </div>
      <div className={styles.navRight}>
        {links.map((li, i) => (
          <Link key={i} href={li.href}>
            <div className={styles.navLink}>
              {li.label}
            </div>
          </Link>
        ))}
        <a className={styles.navAnchor} href="https://toughlovearena.com">
          <div className={styles.navLink}>
            Play Now!
          </div>
        </a>
      </div>
    </nav>
  </div>
)
