import Link from 'next/link'
import { ReactNode } from 'react';
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { YouTubeGallery } from '../components/YouTubePreview';
import { Articles, YouTubeVideos } from '../data/links';
import { sortArrayOfObjects } from '../utils/list';

const ExternalLink = (props: { children: ReactNode; }) => (
  <div style={{ margin: '1em 0', }}>
    {props.children}
  </div>
)

const PressPage = () => {
  const articles = sortArrayOfObjects(Articles, art => art.date).reverse();
  const videos = sortArrayOfObjects(YouTubeVideos, art => art.date).reverse();
  return (
    <Layout title="Press">
      <Column>
        <div style={{textAlign: 'center',}}>
          Download the <a href="/presskit-toughlovearena-2022-04-26.zip">
            Presskit
          </a>
        </div>
        <h1>
          Praise for Tough Love Arena
        </h1>
        {articles.map(ext => (
          <ExternalLink key={ext.url}>
            <div>
              {ext.site}
              {ext.author ? ` / ${ext.author}` : ''}
            </div>
            <div>
              <a href={ext.url} target="_blank" style={{fontSize: '1.3em',}}>
                {ext.title}
              </a>
            </div>
            <div style={{fontSize: '0.8em',}}>
              {ext.date}
            </div>
          </ExternalLink>
        ))}
        <h1>
          YouTube Videos featuring Tough Love Arena
        </h1>
        <YouTubeGallery links={videos} />
      </Column>
    </Layout>
  );
};

export default PressPage;
