import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { InternalPage } from "../data/nav";
import YAML from 'yaml';
import { HallOfFameData } from "../interfaces";
import fs from 'fs';

interface Props {
  fame: HallOfFameData;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `public/fame.yaml`;
  const file = await fs.promises.readFile(path);
  const data = YAML.parse(file.toString()) as HallOfFameData;
  return { props: { fame: data, }, };
}

const FamePage = (props: Props) => {
  return (
    <Layout page={InternalPage.HallOfFame}>
      {props.fame.events.map(entry => (
        <div>
          {entry.name}
        </div>
      ))}
    </Layout>
  )
}

export default FamePage;
