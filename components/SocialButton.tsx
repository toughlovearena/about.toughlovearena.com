import { CSSProperties, HTMLAttributes, useState } from "react";
import { ExternalLink } from "./ExternalLink";
import styles from './SocialButton.module.css';

export function SocialButton(props: {
  url: string;
  img: string;
} & Pick<HTMLAttributes<HTMLAnchorElement>, 'className'>) {
  const [highlight, setHighlight] = useState(false);

  const buttonStyle: CSSProperties = {
    ...(highlight ? {
      filter: 'invert(100%)',
      border: '2px white solid',
    } : {}),
    backgroundImage: `url(${props.img})`,
  };
  return (
    <ExternalLink href={props.url} className={props.className}>
      <span className={styles.container}>
        <div
          className={styles.button}
          style={buttonStyle}
          onMouseEnter={() => setHighlight(true)}
          onMouseLeave={() => setHighlight(false)}
        />
      </span>
    </ExternalLink>
  );
}
