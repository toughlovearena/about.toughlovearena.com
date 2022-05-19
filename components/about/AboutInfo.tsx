import { Column } from "../Column";
import { TextColumns } from "./TextColumns";
import styles from './AboutInfo.module.css';

const playtesters = [
  'Adam Heart',
  'Alec Boccio',
  'Dakota Hadfield',
  'Dan Gant',
  'Dan Enders',
  `David O'Sullivan`,
  'Eddy "RLBS" Hung',
  'Eliah Hecht',
  'Eric Ngeo',
  'Khalid Husain',
  'Khalid Richards',
  'Marvin Ma',
  'Nathan Richardson',
  'Scott Roepnack',
  'Tony Pietra',
].sort();

export const AboutInfo = () => (
  <div className={styles.container}>
    <Column>
      <section>
        <div className={styles.large}>
          coding and game design by M. Paul Weeks
          <br/>
          art and animation by Amy Xu
        </div>
        <div className={styles.medium}>
          original music and sound design by Josie Brechner and M Gewehr
        </div>
      </section>

      <section>
        <div className={styles.medium}>
          alpha playtesters
        </div>
        <TextColumns text={playtesters} />
        <div>
          special thanks to David "UltraDavid" Graham and shygybeats
        </div>
      </section>

      <section>
        Download the <a href="/presskit-toughlovearena-2022-04-26.zip">
          Presskit
        </a>
      </section>
    </Column>
  </div>
);
