import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css';
import { Column } from './Column';
import NavDesktop from './NavDesktop';
import { NavLink } from '../interfaces';

type Props = {
  children?: ReactNode
  title?: string
}

const NavInternalLinks: NavLink[] = [{
  href: "/log",
  label: 'Patch Notes',
}, {
  href: "/gallery",
  label: 'Gallery',
}, {
  href: "/press",
  label: 'Press',
}];

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
      <NavDesktop links={NavInternalLinks} />
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
