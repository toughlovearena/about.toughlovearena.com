import { CONSTANTS } from '../../data/constants';
import { HallOfFameData } from '../../interfaces';
import styles from './FameHeader.module.css'

export const FameHeader = (props: { fame: HallOfFameData, }) => {
  return (
    <div className={styles.header}>
      <div className={styles.subtitle}>
        Here we celebrate and immortalize all of the Tough Love Arena champions
      </div>
      <div className={styles.social}>
        Want to submit your event to the Hall of Fame?
        Fill out this <a href={CONSTANTS.URLs.Form}>form</a>.
      </div>
    </div>
  );
}
