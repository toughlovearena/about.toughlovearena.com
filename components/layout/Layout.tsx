import React, { ReactNode } from 'react'
import Head from 'next/head'
import NavDesktop from './NavDesktop';
import { InternalPageData } from '../../interfaces';
import NavMobile from './NavMobile';
import { InternalPages } from '../../data/nav';
import { SectionTitle } from './SectionTitle';
import { Subtitle } from './Subtitle';
import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
  title?: React.ReactNode;
  page?: InternalPageData;
  hideTitle?: boolean;
  pattern?: boolean;
}

const Meta = {
  Favicon: '/favicon.png',
  Description: "Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play.",
} as const;

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

      {/* meta */}
      <meta name="description" content={Meta.Description} />
      <link rel="shortcut icon" href={Meta.Favicon} />
      <link rel="apple-touch-icon" href={Meta.Favicon} />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph https://ogp.me/ */}
      <meta property="og:title" content="Tough Love Arena" />
      <meta property="og:description" content={Meta.Description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://about.toughlovearena.com/" />
      <meta property="og:image" content="https://about.toughlovearena.com/favicon.png" />

      {/* stylesheets */}
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
