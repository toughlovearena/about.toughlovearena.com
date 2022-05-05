import styled from 'styled-components';
import { HallOfFameEntry, OptionName, Options, ViewOption } from "../../interfaces";

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

export const FameSearch = (props: {
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
