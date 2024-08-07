import { range } from '../../utils/list';
import styles from './TextColumns.module.css';

export const TextColumns = (props: {
  id: string;
  text: string[];
  columns: number;
}) => {
  return (
    <div className={styles.container}>
      {range(props.columns).map(ci => (
        <div key={[props.id, ci].join('-')} className={styles.column}>
          {props.text.filter((_, ni) => ni % props.columns === ci).map((name, ni) => (
            <div key={ni} className={styles.text}>
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
