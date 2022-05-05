import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { InternalPage } from "../data/nav";
import YAML from 'yaml';
import styled from 'styled-components';
import { HallOfFameData, HallOfFameEntry, OptionName, Options, ViewAll, ViewOption } from "../interfaces";
import fs from 'fs';
import { getNextInArray, sortArray, sortArrayOfObjects } from "../utils/list";
import { CONSTANTS } from "../data/constants";
import { Column } from "../components/Column";
import { useCallback, useEffect, useState } from "react";

interface Props {
  fame: HallOfFameData;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = `public/fame.yaml`;
  const file = await fs.promises.readFile(path);
  const data = YAML.parse(file.toString()) as HallOfFameData;
  return { props: { fame: data, }, };
}

const HeaderDiv = styled.div`
  padding: 1em;
  text-align: center;
  font-size: 1.5em;

  a {
    color: var(--heart);
  }
`;

const StatsTitle = styled.div`
  font-size: 2em;
`;
const SubTitle = styled.div`
  font-size: 1em;
  margin: 1em 0;
`;
const Updated = styled.div`
  width: 100%;
  text-align: right;
  font-style: italic;
  font-size: 0.8em;
`;
const SocialInfo = styled.div`
  font-size: 0.8em;
`;

const FameHeader = (props: Props) => {
  const updated = sortArray(props.fame.events.map((evt) => evt.date)).reverse()[0];
  return (
    <HeaderDiv>
      <StatsTitle>The Hall of Fame</StatsTitle>
      <Updated>last updated {updated}</Updated>
      <SubTitle>
        Here we celebrate and immortalize all of the{" "}
        <a href={CONSTANTS.URLs.Game}>Tough Love Arena</a> champions
      </SubTitle>
      <SocialInfo>
        Want to submit your event to the Hall of Fame?
        <br />
        Send us an <a href={CONSTANTS.URLs.Email}>email</a>, message us on{" "}
        <a href={CONSTANTS.URLs.Twitter}>Twitter</a>, or fill out our{" "}
        <a href={CONSTANTS.URLs.Form}>Google Form</a>
      </SocialInfo>
    </HeaderDiv>
  );
}

const ResultsInfo = (props: { filtered: HallOfFameEntry[] }) => {
  const count = props.filtered.length.toString();
  const label = count === "1" ? "tournament" : "tournaments";
  return (
    <div style={{ width: "12em" }}>
      Showing {count} {label}
    </div>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  font-size: 1.3em;
  margin: 0.5em;
`;
const CategorySelect = styled.div<{ highlight: boolean }>`
  cursor: pointer;
  font-size: 0.8em;

  margin: 0.5em;
  padding: 0.5em 1em;

  border-radius: 2rem;
  border: 1px solid white;

  background-color: ${(props) => (props.highlight ? "white" : "black")};
  color: ${(props) => (props.highlight ? "black" : "white")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchBar = styled.input`
  font-size: 1em;
  border-radius: 1em;
  width: 10em;

  margin: 0.5em;
  padding: 0.4em 1em;
`;

const FameSearch = (props: {
  filtered?: HallOfFameEntry[];
  view: ViewOption;
  query: string;
  setView(vo: ViewOption): void;
  setQuery(query: string): void;
}) => {
  return (
    <SearchContainer>
      {Options.map((vo) => (
        <CategorySelect
          key={vo}
          highlight={vo === props.view}
          onClick={() => props.setView(vo)}
        >
          {OptionName(vo)}
        </CategorySelect>
      ))}
      <SearchBar
        placeholder="Filter events"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      />
      <ResultsInfo filtered={props.filtered} />
    </SearchContainer>
  );
}

const TableDiv = styled.div`
  ${false
    ? `
    font-size: 14px;
    width: 100%;
  `
    : `
    font-size: 20px;
  `}
`;
const LeaderboardHeader = styled.div`
  ${false
    ? `
    font-size: 20px;
  `
    : `
  `}
  & > * > * {
    padding-left: 0;
  }
`;
const LeaderboardBody = styled.div`
  a {
    color: white;
  }
  & > *:nth-child(odd) {
    background: rgba(80, 80, 80, 0.5);
  }
  ${false
    ? `
  `
    : `
    & > *:hover {
      color: black;
      background-color: var(--heart);
    }
  `}
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const NormalCell = styled.div<{ isClickable?: boolean }>`
  box-sizing: border-box;
  padding: 0.2em 1em;
  padding-right: 0;
  width: 8em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.isClickable
      ? `
    cursor: pointer;
  `
      : ""}
`;
const DateCell = styled(NormalCell)`
  width: 6em;
`;
const NameCell = styled(NormalCell)`
  width: 15em;
`;
const ChampionCell = styled(NormalCell)`
  width: 10em;
`;
const EntrantsHeaderCell = styled(NormalCell)`
  width: 6em;
`;
const EntrantsBodyCell = styled(EntrantsHeaderCell)`
  justify-content: flex-end;
`;
const CategoryCell = styled(NormalCell)`
  width: 6em;
`;
const LinksCell = styled(NormalCell)`
  width: 10em;
  justify-content: flex-start;

  a {
    color: white;
    margin-right: 0.5em;
  }
`;
const MobileInfoCell = styled(NormalCell)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  flex-grow: 1;

  & > * {
    margin: 0.3em 0;
  }
`;
const MobileEntrantsCell = styled(NormalCell)`
  width: auto;
  justify-content: flex-end;
  padding-right: 1em;
`;

enum SortBy {
  Date,
  TournamentName,
  WinnerName,
  EntrantNum,
}
enum SortOrder {
  Ascending,
  Descending,
}
const DefaultOrder: Record<SortBy, SortOrder> = {
  [SortBy.Date]: SortOrder.Descending,
  [SortBy.TournamentName]: SortOrder.Ascending,
  [SortBy.WinnerName]: SortOrder.Ascending,
  [SortBy.EntrantNum]: SortOrder.Descending,
};

function renderChallonge(challonge?: string) {
  if (!challonge) {
    return null;
  }
  const url = challonge.startsWith("https://")
    ? challonge
    : `https://challonge.com/${challonge}`;
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      Bracket
    </a>
  );
}
function renderYouTube(youtube?: string) {
  if (!youtube) {
    return null;
  }
  const url = `https://youtube.com/watch?v=${youtube}`;
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      YouTube
    </a>
  );
}
function renderSortIcon(isCurrent: boolean, sortOrder: SortOrder) {
  const sortIcon = isCurrent
    ? sortOrder === SortOrder.Ascending
      ? "🔼"
      : "🔽"
    : "⏺️";
  return <div>{sortIcon}</div>;
}

function MobileLinkable(props: {
  event: HallOfFameEntry;
  children: JSX.Element;
}) {
  const { event } = props;
  function getChallongeUrl(challonge: string) {
    return challonge.startsWith("https://")
      ? challonge
      : `https://challonge.com/${challonge}`;
  }
  const url =
    (event.youtube && `https://youtube.com/watch?v=${event.youtube}`) ||
    (event.challonge && getChallongeUrl(event.challonge)) ||
    undefined;

  if (url) {
    return <a href={url}>{props.children}</a>;
  }
  return props.children;
}

const FameTable = (props: {
  filtered: HallOfFameEntry[];
  view: ViewOption;
  query: string;
}) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.Date);
  const [sortOrder, setSortOrder] = useState<SortOrder>(DefaultOrder[sortBy]);

  const updateSort = useCallback(
    (newSortBy: SortBy) => {
      if (newSortBy !== sortBy) {
        setSortBy(newSortBy);
        setSortOrder(DefaultOrder[newSortBy]);
      } else {
        setSortOrder(
          getNextInArray(sortOrder, [
            SortOrder.Ascending,
            SortOrder.Descending,
          ]),
        );
      }
    },
    [sortBy, sortOrder],
  );

  const sortedAscending = (() => {
    switch (sortBy) {
      case SortBy.Date:
        return sortArrayOfObjects(props.filtered, (entry) => entry.date);
      case SortBy.TournamentName:
        return sortArrayOfObjects(props.filtered, (entry) => entry.name);
      case SortBy.WinnerName:
        return sortArrayOfObjects(props.filtered, (entry) => entry.winner);
      case SortBy.EntrantNum:
        return sortArrayOfObjects(props.filtered, (entry) => entry.entrants);
    }
  })();
  const rows =
    sortOrder === SortOrder.Ascending
      ? sortedAscending
      : sortedAscending.reverse();

  // if (false) {
  //   return (
  //     <TableDiv>
  //       <LeaderboardHeader>
  //         <FlexRow>
  //           <DateCell
  //             isClickable={true}
  //             onClick={() => updateSort(SortBy.Date)}
  //           >
  //             <div>
  //               <u>Date</u>
  //             </div>
  //           </DateCell>
  //           <MobileInfoCell>
  //             <div>Tournament Info</div>
  //           </MobileInfoCell>
  //           <MobileEntrantsCell
  //             isClickable={true}
  //             onClick={() => updateSort(SortBy.EntrantNum)}
  //           >
  //             <div>
  //               <u>#</u>
  //             </div>
  //           </MobileEntrantsCell>
  //         </FlexRow>
  //       </LeaderboardHeader>
  //       <LeaderboardBody>
  //         {rows.map((row, ri) => (
  //           <FlexRow key={ri}>
  //             <DateCell>{row.date}</DateCell>
  //             <MobileInfoCell>
  //               <MobileLinkable event={row}>
  //                 <div>{row.name}</div>
  //               </MobileLinkable>
  //               <div>{row.winner}</div>
  //             </MobileInfoCell>
  //             <MobileEntrantsCell>{row.entrants}</MobileEntrantsCell>
  //           </FlexRow>
  //         ))}
  //       </LeaderboardBody>
  //     </TableDiv>
  //   );
  // }

  return (
    <TableDiv>
      <LeaderboardHeader>
        <FlexRow>
          <DateCell isClickable={true} onClick={() => updateSort(SortBy.Date)}>
            <div>
              <u>Date</u>
            </div>
            {renderSortIcon(sortBy === SortBy.Date, sortOrder)}
          </DateCell>
          <NameCell>
            <u>Tournament</u>
          </NameCell>
          <ChampionCell>
            <u>Champion</u>
          </ChampionCell>
          <EntrantsHeaderCell
            isClickable={true}
            onClick={() => updateSort(SortBy.EntrantNum)}
          >
            <div>
              <u>Entrants</u>
            </div>
            {renderSortIcon(sortBy === SortBy.EntrantNum, sortOrder)}
          </EntrantsHeaderCell>
          <CategoryCell>
            <u>Type</u>
          </CategoryCell>
          <LinksCell>
            <u>Links</u>
          </LinksCell>
        </FlexRow>
      </LeaderboardHeader>
      <LeaderboardBody>
        {rows.map((row, ri) => (
          <FlexRow key={ri}>
            <DateCell>{row.date}</DateCell>
            <NameCell>{row.name}</NameCell>
            <ChampionCell>{row.winner}</ChampionCell>
            <EntrantsBodyCell>{row.entrants}</EntrantsBodyCell>
            <CategoryCell>{OptionName(row.category)}</CategoryCell>
            <LinksCell>
              {renderChallonge(row.challonge)}
              {renderYouTube(row.youtube)}
            </LinksCell>
          </FlexRow>
        ))}
      </LeaderboardBody>
    </TableDiv>
  );
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
        <FameTable filtered={filtered} view={view} query={query} />
      </Column>
    </Layout>
  )
}

export default FamePage;
