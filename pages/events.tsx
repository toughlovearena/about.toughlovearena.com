import fs from 'fs';
import YAML from 'yaml';
import { GetStaticProps } from "next";
import { EventDTO, EventsYaml } from "../interfaces";
import { unpackEvents } from '../utils/events';
import Layout from '../components/Layout';
import { InternalPage } from '../data/nav';
import { Column } from '../components/Column';
import { EventBlock } from '../components/events/EventBlock';

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
    <Layout page={InternalPage.HallOfFame} pattern={true}>
      <Column>
        {data.all.map((evt, ei) => (
          <EventBlock
            key={ei}
            event={evt}
          />
        ))}
      </Column>
    </Layout>
  )
}

export default EventsPage;
