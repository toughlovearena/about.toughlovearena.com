import { useCallback, useState } from 'react';
import { HallOfFameEntry, HallOfFameLink, HallOfFameType, ViewOption } from "../../interfaces";
import { getNextInArray, sortArrayOfObjects } from '../../utils/list';
import { ExternalLink } from '../ExternalLink';
import styles from './FameTable.module.css';

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
function collectLinks(entry: HallOfFameEntry): HallOfFameLink[] {
  const links = (entry.links ?? []).concat();
  if (entry.challonge) {
    links.push({
      label: 'Bracket',
      url: entry.challonge.startsWith("https://")
        ? entry.challonge
        : `https://challonge.com/${entry.challonge}`,
    });
  }
  if (entry.youtube) {
    links.push({
      label: 'Video',
      url: `https://youtube.com/watch?v=${entry.youtube}`,
    });
  }
  return sortArrayOfObjects(links, link => link.label);
}

function FameSortIcon({isCurrent, sortOrder}: {
  isCurrent: boolean,
  sortOrder: SortOrder,
}) {
  const sortIcon = isCurrent
    ? sortOrder === SortOrder.Ascending
      ? "🔼"
      : "🔽"
    : "⏺️";
  return <div>{sortIcon}</div>;
}

function FameMobileLinkable(props: {
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
    return <ExternalLink href={url}>{props.children}</ExternalLink>;
  }
  return props.children;
}

export const FameTable = (props: {
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

  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <div className={styles.mobileHead}>
          <div className={styles.flexRow}>
            <div
              className={styles.mobileDate}
              style={{ cursor: 'pointer', }}
              onClick={() => updateSort(SortBy.Date)}
            >
              <div>
                <u>Date</u>
              </div>
            </div>
            <div className={styles.mobileInfo}>
              <u>Tournament Info</u>
            </div>
            <div
              className={styles.mobileEntrants}
              style={{ cursor: 'pointer', }}
              onClick={() => updateSort(SortBy.EntrantNum)}
            >
              <div>
                <u>#</u>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {rows.map((row, ri) => (
            <div className={styles.flexRow} key={ri}>
              <div className={styles.mobileDate}>
                {row.date.split('/').slice(1).join('/')}
              </div>
              <div className={styles.mobileInfo}>
                <div>
                  {row.category === HallOfFameType.Official && (
                    '🍋 '
                  )}
                  {row.name}
                </div>
                <div>
                  {row.winner}
                </div>
                <div>
                  {collectLinks(row).map(link => (
                    <ExternalLink key={['mobile', link.url].join('-')} href={link.url}>
                      {link.label}
                    </ExternalLink>
                  ))}
                </div>
              </div>
              <div className={styles.mobileEntrants}>{row.entrants}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.desktop}>
        <div className={styles.tableHead}>
          <div className={styles.flexRow}>
            <div
              className={styles.cellDate}
              style={{ cursor: 'pointer', }}
              onClick={() => updateSort(SortBy.Date)}
            >
              <div>
                <u>Date</u>
              </div>
              <FameSortIcon isCurrent={sortBy === SortBy.Date} sortOrder={sortOrder} />
            </div>
            <div className={styles.cellName}>
              <u>Tournament</u>
            </div>
            <div className={styles.cellWinnerHead}>
              <u>Champion</u>
            </div>
            <div
              className={styles.cellEntrantsHead}
              style={{ cursor: 'pointer', }}
              onClick={() => updateSort(SortBy.EntrantNum)}
            >
              <div>
                <u>Entrants</u>
              </div>
              <FameSortIcon isCurrent={sortBy === SortBy.EntrantNum} sortOrder={sortOrder} />
            </div>
            <div className={styles.cellLinks}>
              <u>Links</u>
            </div>
          </div>
        </div>
        <div className={styles.tableBody}>
          {rows.map((row, ri) => (
            <div className={styles.flexRow} key={ri}>
              <div className={styles.cellDate}>{row.date}</div>
              <div className={styles.cellName}>
                {row.category === HallOfFameType.Official && (
                  '🍋 '
                )}
                {row.name}
              </div>
              <div className={styles.cellWinnerBody}>{row.winner}</div>
              <div className={styles.cellEntrantsBody}>{row.entrants}</div>
              <div className={styles.cellLinks}>
                {collectLinks(row).map(link => (
                  <ExternalLink key={['desktop', link.url].join('-')} href={link.url}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
