import { HallOfFameEntry, OptionName, Options, ViewOption } from "../../interfaces";
import styles from './FameSearch.module.css';

const ResultsInfo = (props: { filtered: HallOfFameEntry[] }) => {
  const count = props.filtered.length.toString();
  const label = count === "1" ? "tournament" : "tournaments";
  return (
    <div style={{ width: "12em" }}>
      Showing {count} {label}
    </div>
  );
}

export const FameSearch = (props: {
  filtered?: HallOfFameEntry[];
  view: ViewOption;
  query: string;
  setView(vo: ViewOption): void;
  setQuery(query: string): void;
}) => {
  return (
    <div className={styles.container}>
      {Options.map((vo) => (
        <div
          key={vo}
          className={styles.categorySelect}
          style={vo === props.view ? {
            color: 'black',
            backgroundColor: 'white',
          } : {
            color: 'white',
            backgroundColor: 'black',
          }}
          onClick={() => props.setView(vo)}
        >
          {OptionName(vo)}
        </div>
      ))}
      <input
        className={styles.searchBar}
        placeholder="Filter events"
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
      />
      <ResultsInfo filtered={props.filtered} />
    </div>
  );
}
