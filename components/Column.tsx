import { CSSProperties, ReactNode } from "react";
import styles from './Column.module.css';

interface Props {
  width?: number;
  style?: CSSProperties;
  children: ReactNode;
}
export const Column = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.column} style={{
      maxWidth: `${props.width ?? 800}px`,
      ...(props.style ?? {}),
    }}>
      {props.children}
    </div>
  </div>
)
