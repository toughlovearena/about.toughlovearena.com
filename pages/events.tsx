import fs from 'fs';
import { GetStaticProps } from "next";
import YAML from 'yaml';
import { EventList } from '../components/events/EventList';
import Layout from '../components/layout/Layout';
import { InternalPage } from '../data/nav';
import { EventDTO, EventsYaml } from "../interfaces";
import { unpackEvents } from '../utils/events';

interface Props {
  events: EventDTO[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `public/data/events.yaml`;
  const file = await fs.promises.readFile(path);
  const data = YAML.parse(file.toString()) as EventsYaml;
  return { props: { events: data.events, }, };
}

const EventsPage = (props: Props) => {
  const data = unpackEvents(props.events);
  return (
    <Layout page={InternalPage.Events} column={true}>
      <EventList events={data} />
    </Layout>
  )
}

export default EventsPage;
