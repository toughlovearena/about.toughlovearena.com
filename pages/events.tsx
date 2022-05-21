import fs from 'fs';
import YAML from 'yaml';
import { GetStaticProps } from "next";
import { EventDTO, EventsYaml } from "../interfaces";
import { unpackEvents } from '../utils/events';
import Layout from '../components/layout/Layout';
import { InternalPage } from '../data/nav';
import { EventList } from '../components/events/EventList';

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
    <Layout page={InternalPage.Events} pattern={true}>
      <EventList events={data} />
    </Layout>
  )
}

export default EventsPage;
