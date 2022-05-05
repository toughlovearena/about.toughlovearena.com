import Link from 'next/link'
import { NavLink } from '../interfaces';
import styles from './NavMobile.module.css';

export default ({ links, }: { links: NavLink[], }) => (
  <nav className={styles.container}>
    <div className={styles.navLogo}>
      <Link href="/">
        <img src="/logo_v01.png" />
      </Link>
    </div>
    <div className={styles.navLinks}>
      {links.map((li, i) => (
        <Link key={i} href={li.href}>
          <div className={styles.navLink}>
            {li.label}
          </div>
        </Link>
      ))}
    </div>
  </nav>
)
