import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.css';
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
  hideTitle?: boolean;
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
    <div className={[styles.container, props.pattern ? styles.pattern : ''].join(' ')}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <NavDesktop currentHref={props.page?.href} links={InternalPages} />
          <NavMobile currentHref={props.page?.href} links={InternalPages} />
        </header>
        <main className={styles.main}>
          {props.page && !props.hideTitle && (
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
        </main>
      </div>
    </div>
  </div>
)

export default Layout
