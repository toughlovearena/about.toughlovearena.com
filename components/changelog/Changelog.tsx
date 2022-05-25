import { ChangelogData, VersionLog } from "../../interfaces";
import Linkify from 'react-linkify';
import styles from './Changelog.module.css';
import { Column } from "../Column";
import { useKeyPress } from "../../utils/useKeyPress";
import { ChangelogUtils } from "../../utils/changelog";

const utils = new ChangelogUtils();

function Version ({ log, showSocialLinks }: {
  log: VersionLog;
  showSocialLinks: boolean;
}) {
  const anchorId = log.v; // for scrolling
  const isPatchZero = log.v.split('.').pop() === '0';
  return (
    <div>
      <a className={styles.anchor} id={anchorId}></a>
      <div className={styles.version}>
        <a href={'#' + log.v} className={isPatchZero ? styles.minor : styles.patch}>
          {log.v}
        </a>
        {log.date && (
          <span className={styles.date}>
            {log.date}
          </span>
        )}
        {showSocialLinks && (
          <span>
            <a className={styles.socialLink} target="_blank" href={utils.linkTwitter(utils.logTwitter(log))}>Twitter</a>
            {/* <span className={styles.socialLink} onClick={() => new ChangelogUtils().copyDiscord(log)}>Discord</span> */}
            {/* <span className={styles.socialLink} onClick={() => new ChangelogUtils().copySteam(log)}>Steam</span> */}
          </span>
        )}
      </div>
      <ul>
        {log.notes.map((n, i) => (
          <li key={i}>
            <Linkify>
              {n}
            </Linkify>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default (props: {
  data: ChangelogData;
}) => {
  const showSocialLinks = useKeyPress('`');
  return (
    <Column>
      <div className={styles.log}>
        {props.data.versions.map(log => (
          <Version key={log.v} log={log} showSocialLinks={showSocialLinks} />
        ))}
      </div>
    </Column>
  );
}
