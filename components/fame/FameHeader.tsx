import { CONSTANTS } from '../../data/constants';
import { HallOfFameData } from '../../interfaces';
import styles from './FameHeader.module.css'

export const FameHeader = (props: { fame: HallOfFameData, }) => {
  return (
    <div className={styles.header}>
      <div className={styles.subtitle}>
        Here we celebrate and immortalize all of the{" "}
        <a href={CONSTANTS.URLs.Game}>Tough Love Arena</a> champions
      </div>
      <div className={styles.social}>
        Want to submit your event to the Hall of Fame?
        <br />
        Send us an <a href={CONSTANTS.URLs.Email}>email</a>, message us on{" "}
        <a href={CONSTANTS.URLs.Twitter}>Twitter</a>, or fill out our{" "}
        <a href={CONSTANTS.URLs.Form}>Google Form</a>
      </div>
    </div>
  );
}
