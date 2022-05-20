import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css';
import { Column } from './Column';
import NavDesktop from './NavDesktop';
import { InternalPageData } from '../interfaces';
import NavMobile from './NavMobile';
import { InternalPages } from '../data/nav';
import { SectionTitle } from './SectionTitle';
import { Subtitle } from './Subtitle';

type Props = {
  children: ReactNode;
  title?: React.ReactNode;
  page?: InternalPageData;
  hideFooter?: boolean;
  pattern?: boolean;
}

const Layout = (props: Props) => (
  <div>
    <Head>
      <title>
        {(
          props.title ||
          (props.page?.label && `${props.page.label} | Tough Love Arena`) ||
          `Tough Love Arena`
        )}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
      <link rel="stylesheet" href="/styles.css" />
    </Head>
    <main className={props.pattern ? styles.pattern : ''}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <NavDesktop currentHref={props.page?.href} links={InternalPages} />
          <NavMobile currentHref={props.page?.href} links={InternalPages} />
        </header>
        <section className={styles.section}>
          {props.page && (
            <SectionTitle>
              {props.page.label}
            </SectionTitle>
          )}
          {props.page?.subtitle && (
            <Subtitle>
              {props.page.subtitle}
            </Subtitle>
          )}
          {props.children}
        </section>
        {!props.hideFooter && (
          <Column width={400}>
            <footer className={styles.footer}>
              {'© 2022 M. Paul Weeks & Amy Xu'}
            </footer>
          </Column>
        )}
      </div>
    </main>
  </div>
)

export default Layout
