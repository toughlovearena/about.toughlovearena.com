import { ChangelogData, VersionLog } from "../../interfaces";
import Linkify from 'react-linkify';
import copyToClipboard from 'copy-to-clipboard';
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
        <a
          className={isPatchZero ? styles.minor : styles.patch}
          href={'#' + log.v}
          onClick={() => copyToClipboard(window.location.href.split('#')[0] + '#' + log.v)}
        >
          {log.v}
        </a>
        {log.date && (
          <span className={styles.date}>
            {log.date}
          </span>
        )}
        {showSocialLinks && (
          <span>
            {/* link to prewritten */}
            <a
              className={styles.socialLink}
              target="_blank"
              href={utils.linkTwitter(utils.logTwitter(log))}
            >
              Twitter
            </a>

            {/* link + copy to clipboard */}
            <a
              className={styles.socialLink}
              target="_blank"
              href={utils.linkDiscord()}
              onClick={() => copyToClipboard(utils.logDiscord(log))}
            >
                Discord
            </a>

            {/* copy to clipboard */}
            <span
              className={styles.socialLink}
              onClick={() => copyToClipboard(utils.logSteam(log))}
            >
              Steam
            </span>
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
