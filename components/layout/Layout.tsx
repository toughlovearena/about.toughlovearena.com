import Head from 'next/head';
import { ReactNode } from 'react';
import { InternalPages } from '../../data/nav';
import { InternalPageData } from '../../interfaces';
import styles from './Layout.module.css';
import { LayoutColumn } from './LayoutColumn';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { SectionTitle } from './SectionTitle';
import { Subtitle } from './Subtitle';

type Props = {
  children: ReactNode;
  page?: InternalPageData;
  column: boolean;
}


const Layout = (props: Props) => {
  const Meta = {
    Title: (
      (props.page?.label && `${props.page.label} | Tough Love Arena`) ||
      `Tough Love Arena`
    ),
    Url: (
      (props.page?.href && `https://about.toughlovearena.com${props.page.href}/`) ||
      'https://about.toughlovearena.com/'
    ),
    Favicon: '/favicon.png',
    Description: "Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play.",
  } as const;
  return (
    <div>
      <Head>
        <title>{Meta.Title}</title>

        {/* page-specific meta */}
        <meta name="description" content={Meta.Description} />
        <link rel="shortcut icon" href={Meta.Favicon} />
        <link rel="apple-touch-icon" href={Meta.Favicon} />

        {/* Open Graph https://ogp.me/ */}
        <meta property="og:title" content={Meta.Title} />
        <meta property="og:description" content={Meta.Description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={Meta.Url} />
        <meta property="og:image" content="https://about.toughlovearena.com/favicon.png" />
      </Head>
      <main className={styles.container}>
        <header>
          <NavDesktop currentHref={props.page?.href} links={InternalPages} />
          <NavMobile currentHref={props.page?.href} links={InternalPages} />
        </header>
        {props.column ? (
          <LayoutColumn>
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
          </LayoutColumn>
        ) : props.children}
      </main>
    </div>
  );
}

export default Layout
