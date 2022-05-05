import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css';
import { Column } from './Column';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>
        {title ? `${title} | Tough Love Arena` : `Tough Love Arena`}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <link rel="stylesheet" href="/styles.css" />
    </Head>
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/">
            <img src="/logo_v01.png" />
          </Link>
        </div>
        <div className={styles.navRight}>
          <Link href="/log">
            <div className={styles.navLink}>
              Patch Notes
            </div>
          </Link>
          <Link href="/gallery">
            <div className={styles.navLink}>
              Gallery
            </div>
          </Link>
          <Link href="/press">
            <div className={styles.navLink}>
              Press
            </div>
          </Link>
          <a className={styles.navAnchor} href="https://toughlovearena.com">
            <div className={styles.navLink}>
              Play Now!
            </div>
          </a>
        </div>
      </nav>
    </header>
    <section className={styles.section}>
      {children}
    </section>
    <Column width={400}>
      <footer className={styles.footer}>
        {'© 2022 M. Paul Weeks & Amy Xu'}
      </footer>
    </Column>
  </div>
)

export default Layout
