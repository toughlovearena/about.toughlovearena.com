import Layout from '../components/Layout'
import YAML from 'yaml';
import { InternalPage } from '../data/nav';
import { GetStaticProps } from 'next';
import { ChangelogData } from '../interfaces/changelog';
import Changelog from '../components/changelog/Changelog';
import { SectionTitle } from '../components/SectionTitle';

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
      <Changelog data={props.changelog} />
    </Layout>
  );
}

export default LogPage;
