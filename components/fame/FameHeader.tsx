import { CONSTANTS } from '../../data/constants';
import { ExternalLink } from '../ExternalLink';
import styles from './FameHeader.module.css'

export const FameHeader = () => {
  return (
    <div className={styles.header}>
      Want to submit your event to the Hall of Fame?
      Fill out this <ExternalLink href={CONSTANTS.URLs.Form}>form</ExternalLink>.
    </div>
  );
}
