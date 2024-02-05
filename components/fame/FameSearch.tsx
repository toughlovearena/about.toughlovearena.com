import { HallOfFameEntry, OptionName, Options, ViewOption } from "../../interfaces";
import styles from './FameSearch.module.css';

const ResultsInfo = (props: { filtered: HallOfFameEntry[] }) => {
  const count = props.filtered.length.toString();
  const label = count === "1" ? "tournament" : "tournaments";
  return (
    <div>
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
      <div className={styles.options}>
        {Options.map((vo) => (
          <div
            key={vo}
            className={[styles.category, (
              vo === props.view ? styles.categorySelected : ''
            )].join(' ')}
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
      </div>
      <ResultsInfo filtered={props.filtered} />
    </div>
  );
}
