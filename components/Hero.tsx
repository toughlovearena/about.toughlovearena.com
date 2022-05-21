import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { Articles } from '../data/links';
import { sleep } from '../utils/async';
import { getNextInArray, shuffleArray } from '../utils/list';
import styles from './Hero.module.css';

export default () => {
  const shuffled = useRef(shuffleArray(Articles));
  const [article, setArticle] = useState(Articles[0]);
  const [visible, setVisible] = useState(true);

  const transitionMs = 300;
  const activeMs = 10 * 1000;

  const cycle = useCallback(() => {
    (async () => {
      setVisible(false);
      // give time for animation
      await sleep(2 * transitionMs);
      setVisible(true);
    })();
  }, [setVisible]);

  useEffect(() => {
    // todo store intervalId in ref and manage this lifecycle when clicking
    const intervalId = setInterval(cycle, activeMs);
    return () => clearInterval(intervalId);
  }, [setArticle]);
  useEffect(() => {
    (async () => {
      if (!visible) {
        // wait for transition
        await sleep(2 * transitionMs);
        // change article
        setArticle(current => getNextInArray(current, shuffled.current));
      }
    })();
  }, [shuffled, visible]);

  const quoteStyle: CSSProperties = {
    transitionDuration: transitionMs + 'ms',
    ...(visible ? {} : {
      opacity: 0,
      transform: 'translate(0%, 0.5em)',
    })
  };

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.top}></div>
        <div className={styles.middle}>
          <div className={styles.pitch}>
            Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play!
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.quote} style={quoteStyle}>
            <div className={styles.quoteSnippet} onClick={() => cycle()}>
              {article.quote}
            </div>
            <div className={styles.quoteAuthor}>
              {article.author} [<a href={article.url}>{article.site}</a>]
            </div>
          </div>
        </div>
      </div>
      <video
        className={styles.video}
        autoPlay={true}
        muted={true}
        loop={true}
      >
        <source src="/asset/demo_480p.mp4" type="video/mp4"></source>
      </video>
    </div>
  );

};
