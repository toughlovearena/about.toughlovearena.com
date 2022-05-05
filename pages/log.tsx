import Link from 'next/link'
import { useEffect, useState } from 'react';
import Linkify from 'react-linkify';
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import YAML from 'yaml';
import styles from './log.module.css';
import { InternalPage } from '../data/pages';

interface VersionLog {
  v: string;
  date: string;
  notes: string[];
}
interface ChangelogData {
  versions: VersionLog[];
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

const LogPage = () => {
  const [data, setData] = useState<ChangelogData | undefined>();

  useEffect(() => {
    (async () => {
      // todo using api for temp cors workaround
      const url = `https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/proxy/changelog.yaml`;
      const resp = await fetch(url);
      const text = await resp.text();
      const data = YAML.parse(text) as ChangelogData;
      setData(data);
      const { hash } = window.location;
      if (hash) {
        const id = hash.slice(1);
        setTimeout(() => document.getElementById(id)?.scrollIntoView(), 500);
      }
    })();
  }, [setData]);

  return (
    <Layout page={InternalPage.PatchNotes}>
      <h1>Patch Notes</h1>
      <div className={styles.log}>
        {data ? (
          data.versions.map(log => (
            <VersionRow key={log.v} log={log} />
          ))
        ) : (
          'loading...'
        )}
      </div>
    </Layout>
  );
}

export default LogPage;
