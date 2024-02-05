import { ReactNode } from "react";
import styles from './LayoutColumn.module.css';

interface Props {
  children: ReactNode;
}
export const LayoutColumn = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.column}>
      {props.children}
    </div>
  </div>
)
