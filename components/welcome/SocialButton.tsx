import { CSSProperties, HTMLAttributes } from "react";
import { ExternalLink } from "../ExternalLink";
import styles from './SocialButton.module.css';

export function SocialButton(props: {
  url: string;
  img: string;
} & Pick<HTMLAttributes<HTMLAnchorElement>, 'className'>) {

  const buttonStyle: CSSProperties = {
    backgroundImage: `url(${props.img})`,
  };
  return (
    <ExternalLink href={props.url} className={props.className}>
      <span className={styles.container}>
        <div
          className={styles.button}
          style={buttonStyle}
        />
      </span>
    </ExternalLink>
  );
}
