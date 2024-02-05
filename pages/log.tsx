import fs from 'fs';
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import YAML from 'yaml';
import Changelog from '../components/changelog/Changelog';
import Layout from '../components/layout/Layout';
import { InternalPage } from '../data/nav';
import { ChangelogData } from '../interfaces';

interface Props {
  initialChangelog: ChangelogData;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `public/data/changelog.yaml`;
  const file = await fs.promises.readFile(path);
  const data = YAML.parse(file.toString()) as ChangelogData;
  const trimmed: ChangelogData = {
    ...data,
    versions: data.versions.slice(0, 20),
  };
  return { props: { initialChangelog: trimmed } };
}

async function fetchFullData(): Promise<ChangelogData> {
  const resp = await fetch('/data/changelog.yaml');
  const data = YAML.parse(await resp.text()) as ChangelogData;
  return data;
}

const LogPage = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [changelog, setChangelog] = useState<ChangelogData>();

  useEffect(() => {
    setLoading(true);
    fetchFullData().then(data => {
      setChangelog(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout page={InternalPage.PatchNotes} column={true}>
      <Changelog data={changelog ?? props.initialChangelog} />
      {loading && (
        <div style={{ textAlign: 'center' }}>loading more, please wait...</div>
      )}
    </Layout>
  );
}

export default LogPage;
