import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css';
import { Column } from './Column';
import NavDesktop from './NavDesktop';
import { InternalPageData } from '../interfaces';
import NavMobile from './NavMobile';
import { InternalPages } from '../data/nav';

type Props = {
  children: ReactNode;
  page: InternalPageData;
}

const Layout = ({ page, children, }: Props) => (
  <div>
    <Head>
      <title>
        {page.label ? `${page.label} | Tough Love Arena` : `Tough Love Arena`}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <link rel="stylesheet" href="/styles.css" />
    </Head>
    <header className={styles.header}>
      <NavDesktop currentHref={page.href} links={InternalPages} />
      <NavMobile currentHref={page.href} links={InternalPages} />
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
