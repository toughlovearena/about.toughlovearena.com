import { ReactNode } from "react";
import { YouTubeLink } from "../interfaces";
import styles from './YouTubePreview.module.css';

const YouTubeEmbed = (props: { url: string; }) => {
  const embedUrl = props.url.replace('/watch?v=', '/embed/').replace('&t=', '?start=');
  return (
    <iframe
      className={styles.iframe}
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
  )
};

const YouTubePreview = (props: { link: YouTubeLink; }) => {
  const url = `https://www.youtube.com/watch?v=${props.link.vid}`;
  const timeArg = props.link.timestamp !== undefined ? `&t=${props.link.timestamp}` : '';
  const timestamp = timeArg ? {
    url: `${url}${timeArg}`,
    label: Math.floor(props.link.timestamp / 60) + ':' + (props.link.timestamp % 60).toString().padStart(2, '0'),
  } : undefined;
  return (
    <div className={styles.block}>
      <YouTubeEmbed url={timestamp?.url ?? url} />
      <div className={styles.overlay}>
        <div>
          {props.link.channel}
        </div>
        <div>
          <a href={url} target="_blank" style={{fontSize: '1.5em',}}>
            {props.link.title}
          </a>
        </div>
        <br/>
        {timestamp ? (
          <>
            <div>
              Jump to (<a href={timestamp.url} target="_blank">{timestamp.label}</a>)
            </div>
            <br/>
          </>
          ) : ''}
        <div style={{fontSize: '0.8em',}}>
          {props.link.date}
        </div>
      </div>
    </div>
  );
};

export const YouTubeGallery = (props: { links: YouTubeLink[]; }) => {
  return (
    <div className={styles.gallery}>
      {props.links.map(link => <YouTubePreview key={link.vid} link={link} />)}
    </div>
  )
}
