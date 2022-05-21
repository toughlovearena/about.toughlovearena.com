import Layout from '../components/layout/Layout'
import fs from 'fs';
import YAML from 'yaml';
import { InternalPage } from '../data/nav';
import { GetStaticProps } from 'next';
import { ChangelogData } from '../interfaces';
import Changelog from '../components/changelog/Changelog';

interface Props {
  changelog: ChangelogData;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `public/data/changelog.yaml`;
  const file = await fs.promises.readFile(path);
  const data = YAML.parse(file.toString()) as ChangelogData;
  return { props: { changelog: data, }, };
}
const LogPage = (props: Props) => {
  return (
    <Layout page={InternalPage.PatchNotes} pattern={true}>
      <Changelog data={props.changelog} />
    </Layout>
  );
}

export default LogPage;
