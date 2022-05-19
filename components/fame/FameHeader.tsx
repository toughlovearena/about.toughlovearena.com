import { CONSTANTS } from '../../data/constants';
import styles from './FameHeader.module.css'

export const FameHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.social}>
        Want to submit your event to the Hall of Fame?
        Fill out this <a href={CONSTANTS.URLs.Form}>form</a>.
      </div>
    </div>
  );
}
