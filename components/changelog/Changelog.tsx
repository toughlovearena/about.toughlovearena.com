import copyToClipboard from 'copy-to-clipboard';
import Linkify from 'react-linkify';
import { useKeyPress } from "../../hooks/useKeyPress";
import { ChangelogData, VersionLog } from "../../interfaces";
import { ChangelogUtils } from "../../utils/changelog";
import { ExternalLink } from "../ExternalLink";
import styles from './Changelog.module.css';

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
            <ExternalLink
              className={styles.socialLink}
              href={utils.linkTwitter(utils.logTwitter(log))}
            >
              Twitter
            </ExternalLink>

            {/* link + copy to clipboard */}
            <ExternalLink
              className={styles.socialLink}
              href={utils.linkDiscord()}
              onClick={() => copyToClipboard(utils.logDiscord(log))}
            >
                Discord
            </ExternalLink>

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
    <div className={styles.container}>
      {props.data.versions.map(log => (
        <Version key={log.v} log={log} showSocialLinks={showSocialLinks} />
      ))}
    </div>
  );
}
