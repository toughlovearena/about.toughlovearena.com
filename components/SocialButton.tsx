import { CSSProperties, useState } from "react";
import styles from './SocialButton.module.css';

export const SocialButton = (props: {
  url: string;
  img: string;
}) => {
  const [highlight, setHighlight] = useState(false);

  const buttonStyle: CSSProperties = {
    ...(highlight ? {
      filter: 'invert(100%)',
      border: '2px white solid',
    } : {}),
    backgroundImage: `url(${props.img})`,
  };
  return (
    <a className={styles.container} href={props.url}>
      <div
        className={styles.button}
        style={buttonStyle}
        onMouseEnter={() => setHighlight(true)}
        onMouseLeave={() => setHighlight(false)}
      />
    </a>
  );
}
