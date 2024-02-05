import { ExternalLink } from '../ExternalLink';
import { AboutInfo } from '../about/AboutInfo';
import Hero from './Hero';
import styles from './WelcomeInfo.module.css';

export function WelcomeInfo() {
  return (
    <>
      <Hero />
      <div className={styles.welcomeWrapper}>
        <div className={styles.welcomeContent}>
          <div className={styles.pitch}>
            Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play!
          </div>
          <div className={styles.pitch}>
            Try it out now with no installation required at
            <br/>
            <ExternalLink href="https://toughlovearena.com">toughlovearena.com</ExternalLink>
          </div>

          <AboutInfo />
        </div>
      </div>
    </>
  );
};
