import Layout from '../components/Layout'
import YAML from 'yaml';
import { InternalPage } from '../data/nav';
import { GetStaticProps } from 'next';
import { ChangelogData } from '../interfaces/changelog';
import Changelog from '../components/changelog/Changelog';

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
const LogPage = (props: Props) => {
  return (
    <Layout page={InternalPage.PatchNotes}>
      <h1>Patch Notes</h1>
      <Changelog data={props.changelog} />
    </Layout>
  );
}

export default LogPage;
