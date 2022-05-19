import { range } from '../../utils/list';
import styles from './TextColumns.module.css';

export const TextColumns = (props: {
  text: string[];
}) => {
  const columns = 4; // todo base on screen
  return (
    <div className={styles.container}>
      {range(columns).map(ci => (
        <div className={styles.column}>
          {props.text.filter((_, ni) => ni % columns === ci).map((name, ni) => (
            <div key={ni} className={styles.text}>
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
