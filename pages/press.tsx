import Link from 'next/link'
import { ReactNode } from 'react';
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { Articles, YouTubeVideos } from '../data/links';
import { sortArrayOfObjects } from '../utils/list';

const ExternalLink = (props: { children: ReactNode; }) => (
  <div style={{ margin: '1em 0', }}>
    {props.children}
  </div>
)

const YouTubeEmbed = (props: { url: string; }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={props.url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
  )
};

const PressPage = () => {
  const articles = sortArrayOfObjects(Articles, art => art.date).reverse();
  const videos = sortArrayOfObjects(YouTubeVideos, art => art.date).reverse();
  return (
    <Layout title="Press">
      <Column>
        <h1>Press</h1>
        <div>
          <a href="/presskit-toughlovearena-2022-04-26.zip">
            Download Presskit
          </a>
        </div>
        <h2>
          Praise for Tough Love Arena
        </h2>
        {articles.map(ext => (
          <ExternalLink key={ext.url}>
            <div>
              {ext.author}
            </div>
            <div>
              <a href={ext.url} target="_blank">
                {ext.label}
              </a>
            </div>
            <div style={{fontSize: '0.8em',}}>
              {ext.date}
            </div>
          </ExternalLink>
        ))}
        <h2>
          YouTube Videos featuring Tough Love Arena
        </h2>
        {videos.map(ext => {
          const url = `https://www.youtube.com/watch?v=${ext.vid}`;
          const timeArg = ext.timestamp !== undefined ? `&t=${ext.timestamp}` : '';
          const timestamp = timeArg ? {
            url: `${url}${timeArg}`,
            label: Math.floor(ext.timestamp / 60) + ':' + (ext.timestamp % 60).toString().padStart(2, '0'),
          } : undefined;
          return (
            <ExternalLink key={ext.vid}>
              <div>
                {ext.channel}
              </div>
              <div>
                <a href={url} target="_blank">
                  {ext.title}
                </a>
                {timestamp ? (
                  <span>
                    &nbsp;(<a href={timestamp.url} target="_blank">{timestamp.label}</a>)
                  </span>
                ) : ''}
              </div>
              <div style={{fontSize: '0.8em',}}>
                {ext.date}
              </div>
            </ExternalLink>
          );
        })}
      </Column>
    </Layout>
  );
};

export default PressPage;
