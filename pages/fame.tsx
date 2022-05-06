import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { InternalPage } from "../data/nav";
import YAML from 'yaml';
import { HallOfFameData, ViewAll, ViewOption } from "../interfaces";
import fs from 'fs';
import { Column } from "../components/Column";
import { useState } from "react";
import { FameTable } from "../components/fame/FameTable";
import { FameSearch } from "../components/fame/FameSearch";
import { FameHeader } from "../components/fame/FameHeader";
import { SectionTitle } from "../components/SectionTitle";

interface Props {
  fame: HallOfFameData;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `public/data/fame.yaml`;
  const file = await fs.promises.readFile(path);
  const data = YAML.parse(file.toString()) as HallOfFameData;
  return { props: { fame: data, }, };
}

const FamePage = (props: Props) => {
  const [view, setView] = useState<ViewOption>(ViewAll);
  const [query, setQuery] = useState<string>("");

  const { events } = props.fame;
  const terms = query.toLowerCase().split(" ");
  const filteredByCategory =
    view === ViewAll
      ? events
      : events.filter((entry) => entry.category === view);
  const filteredBySearch = query
    ? filteredByCategory.filter((entry) => {
        const toMatch = [
          entry.name.toLowerCase(),
          entry.winner.toLowerCase(),
        ];
        return terms.every((searchTerm) =>
          toMatch.some((data) => data.includes(searchTerm)),
        );
      })
    : filteredByCategory;
  const filtered = filteredBySearch;

  return (
    <Layout page={InternalPage.HallOfFame}>
      <Column>
        <FameHeader {...props} />
        <FameSearch
          filtered={filtered}
          view={view}
          query={query}
          setView={setView}
          setQuery={setQuery}
        />
      </Column>
      <FameTable filtered={filtered} view={view} query={query} />
    </Layout>
  )
}

export default FamePage;
