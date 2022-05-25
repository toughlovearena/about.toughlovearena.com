import Link from 'next/link'
import { InternalPage } from '../../data/nav';
import { NavProps } from '../../interfaces';
import styles from './NavMobile.module.css';

export default ({ currentHref, links, }: NavProps) => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link href={InternalPage.Home.href}>
          <img src="/logo_v01.png" />
        </Link>
      </div>
      <div className={styles.navLinks}>
        {links.map((li, i) => (
          <Link key={i} href={li.href}>
            <div className={styles.navLink}>
              {currentHref === li.href ? (
                <b>{li.label}</b>
              ) : (
                <span>{li.label}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  </div>
)
