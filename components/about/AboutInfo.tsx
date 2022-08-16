import { Column } from "../Column";
import { TextColumns } from "./TextColumns";
import styles from './AboutInfo.module.css';
import { useDocumentSize } from "../../hooks/useDocumentSize";
import { YouTubePreview } from "../YouTubePreview";
import { Documentary } from "../../data/links";

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

export const AboutInfo = () => {
  const { width } = useDocumentSize();
  const minWidth = 150;
  const maxColumns = 4;
  const columns = Math.min(maxColumns, Math.floor(width / minWidth));
  console.log(columns);

  return (
    <div className={styles.container}>
      <Column>
        <section>
          <img
            className={styles.team}
            src="/asset/team.jpg"
            alt="dev team portrait"
          />
        </section>
        <section>
          <div className={styles.large}>
            Coding and game design by M. Paul Weeks
            <br/>
            Art and animation by Amy Xu
          </div>
        </section>
        <section>
          <div className={styles.medium}>
            Original music and sound design by Josie Brechner and M Gewehr
          </div>
        </section>

        <section>
          <YouTubePreview link={Documentary} />
        </section>

        <section>
          <div className={styles.large}>
            Alpha Playtesters
          </div>
        </section>
        <section>
          <TextColumns columns={columns} text={playtesters} />
        </section>
        <section>
          <div className={styles.medium}>
            Special thanks to David "UltraDavid" Graham and shygybeats
          </div>
        </section>

        <section>
          download the <a href="/presskit-toughlovearena-2022-04-26.zip"> presskit
          </a>
        </section>
      </Column>
    </div>
  );
};
