import Link from 'next/link'
import { useEffect, useState } from 'react';
import { Column } from '../components/Column';
import Layout from '../components/Layout'
import { Articles } from '../data/links';
import YAML from 'yaml';

interface VersionLog {
  v: string;
  date: string;
  notes: string[];
}
interface ChangelogData {
  versions: VersionLog[];
}

const LogPage = () => {
  const [data, setData] = useState<ChangelogData | undefined>();

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://toughlovearena.com/data/changelog.yaml');
      const text = await resp.text();
      const data = YAML.parse(text) as ChangelogData;
      setData(data);
    })();
  }, [setData]);

  return (
    <Layout title="Patch Notes">
      <Column>
        <h1>Patch Notes</h1>
        {data ? (
          data.versions.map(entry => {
            <p key={entry.v}>
              {JSON.stringify(entry)}
            </p>
          })
        ) : (
          'loading...'
        )}
      </Column>
    </Layout>
  );
}

export default LogPage;
