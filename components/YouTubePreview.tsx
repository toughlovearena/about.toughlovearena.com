import { CSSProperties, ReactNode } from "react";
import { YouTubeLink } from "../interfaces";
import { ExternalLink } from "./ExternalLink";
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

export const YouTubePreview = (props: {
  link: YouTubeLink;
  blockStyle?: CSSProperties;
}) => {
  const url = `https://www.youtube.com/watch?v=${props.link.vid}`;
  const timeArg = props.link.timestamp !== undefined ? `&t=${props.link.timestamp}` : '';
  const timestamp = timeArg ? {
    url: `${url}${timeArg}`,
    label: Math.floor(props.link.timestamp / 60) + ':' + (props.link.timestamp % 60).toString().padStart(2, '0'),
  } : undefined;
  const blockStyle: CSSProperties = props.blockStyle ?? {};
  return (
    <div className={styles.block} style={blockStyle}>
      <YouTubeEmbed url={timestamp?.url ?? url} />
      <div className={styles.overlay}>
        <div>
          {props.link.channel}
        </div>
        <div>
          <ExternalLink href={url} style={{fontSize: '1.2em',}}>
            {props.link.title}
          </ExternalLink>
        </div>
        <br/>
        {timestamp ? (
          <>
            <div>
              Jump to (<ExternalLink href={timestamp.url}>{timestamp.label}</ExternalLink>)
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
