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
      // todo using api for temp cors workaround
      const url = `https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/proxy/changelog.yaml`;
      const resp = await fetch(url);
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
          data.versions.map(entry => (
            <div key={entry.v} style={{margin: '0.5em 0',}}>
              <div>
                {entry.v}
              </div>
              <div>
                {entry.date}
              </div>
              {entry.notes.map((note, ni) => (
                <div key={ni}>
                  - {note}
                </div>
              ))}
            </div>
          ))
        ) : (
          'loading...'
        )}
      </Column>
    </Layout>
  );
}

export default LogPage;
