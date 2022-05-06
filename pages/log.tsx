import Linkify from 'react-linkify';
import Layout from '../components/Layout'
import YAML from 'yaml';
import styles from './log.module.css';
import { InternalPage } from '../data/nav';
import { GetStaticProps } from 'next';

interface VersionLog {
  v: string;
  date: string;
  notes: string[];
}
interface ChangelogData {
  versions: VersionLog[];
}

interface Props {
  changelog: ChangelogData;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const url = 'https://toughlovearena.com/data/changelog.yaml';
  const resp = await fetch(url);
  const text = await resp.text();
  const data = YAML.parse(text) as ChangelogData;
  return { props: { changelog: data, }, };
}

function VersionRow ({ log }: { log: VersionLog, }) {
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
      {renderNotes(log.notes)}
    </div>
  );
}
function renderNotes(notes: React.ReactNode[]) {
  return (
    <ul>
      {notes.map((n, i) => (
        <li key={i}>
          <Linkify>
            {n}
          </Linkify>
        </li>
      ))}
    </ul>
  );
}

const LogPage = (props: Props) => {
  return (
    <Layout page={InternalPage.PatchNotes}>
      <h1>Patch Notes</h1>
      <div className={styles.log}>
        {props.changelog.versions.map(log => (
          <VersionRow key={log.v} log={log} />
        ))}
      </div>
    </Layout>
  );
}

export default LogPage;
