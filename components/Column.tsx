import { ReactNode } from "react";
import styles from './Column.module.css';

interface Props {
  width?: number;
  children: ReactNode;
}
export const Column = (props: Props) => (
  <div className={styles.column} style={{
    maxWidth: `${props.width ?? 800}px`,
  }}>
    {props.children}
  </div>
)
