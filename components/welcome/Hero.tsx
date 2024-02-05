import { CSSProperties, useState } from 'react';
import styles from './Hero.module.css';

export default () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const heroBackground: CSSProperties = videoLoaded ? {
    backgroundColor: 'black',
  } : {
    backgroundImage: 'url(asset/gallery/720p/gameplay1.jpg)',
  }
  return (
    <div className={styles.hero} style={heroBackground}>
      <video
        className={styles.video}
        autoPlay={true}
        muted={true}
        loop={true}
        onTimeUpdate={() => setVideoLoaded(true)}
      >
        <source src="/asset/demo_480p.mp4" type="video/mp4"></source>
      </video>
    </div>
  );

};
