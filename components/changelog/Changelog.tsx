import { ChangelogData, VersionLog } from "../../interfaces/changelog";
import Linkify from 'react-linkify';
import styles from './Changelog.module.css';

function Version ({ log }: { log: VersionLog, }) {
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

export default (props: { data: ChangelogData }) => (
  <div className={styles.log}>
    {props.data.versions.map(log => (
      <Version key={log.v} log={log} />
    ))}
  </div>
);
