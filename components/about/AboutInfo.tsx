import { Social } from "../../data/links";
import { useDocumentSize } from "../../hooks/useDocumentSize";
import { ExternalLink } from "../ExternalLink";
import { SocialButton } from "../welcome/SocialButton";
import styles from './AboutInfo.module.css';
import { TextColumns } from "./TextColumns";

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

const specialThanks = [
  'shygybeats',
  'Phil Cogar',
  'Highrow',
  'David "UltraDavid" Graham',
];

export const AboutInfo = () => {
  const { width } = useDocumentSize();
  const minWidth = 150;
  const maxColumns = 4;
  const columns = Math.min(maxColumns, Math.floor(width / minWidth));
  console.log(columns);

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.social}>
          {Social.map(link => <SocialButton
            key={link.url}
            img={link.imageSrc}
            url={link.url}
          />)}
        </div>
      </section>

      <div className={styles.gap}></div>

      <section>
        <div className={styles.large}>
          About the Team
        </div>
        <img
          className={styles.team}
          src="/asset/team.jpg"
          alt="dev team portrait"
        />
        <div className={styles.medium}>
          Coding and game design by M. Paul Weeks
          <br/>
          Art and animation by Amy Xu
        </div>
        <div >
          Original music and sound design by Josie Brechner and M Gewehr
        </div>
      </section>

      <section>
        Send emails to <b>hello (at) toughlovearena (dot) com</b>
      </section>

      <div className={styles.gap}></div>

      {/* mirrors */}
      <section>
        <div className={styles.large}>
          Mirrors and Proxies
        </div>
      </section>
      <section>
        <div>
          {'If you suspect that '}
          <ExternalLink href="https://toughlovearena.com">
            toughlovearena.com
          </ExternalLink>
          {' is blocked '}
          <br/>
          on your network, try out these other URLs!
        </div>
        <br/>
        <div>
          <span style={{textDecoration: 'line-through',}}>
            beefnoodlestew.site
          </span>
        </div>
        <div>
          <ExternalLink href="https://mirror.toughlovearena.com">
            mirror.toughlovearena.com
          </ExternalLink>
        </div>
        <div>
          <ExternalLink href="https://toughlove.space">
            toughlove.space
          </ExternalLink>
        </div>
      </section>

      <div className={styles.gap}></div>

      <section>
        <div className={styles.large}>
          Alpha Playtesters
        </div>
      </section>
      <section>
        <TextColumns columns={columns} text={playtesters} />
      </section>
      <section>
        <div className={styles.large}>
          Special Thanks
        </div>
      </section>
      <section className={styles.medium}>
        <TextColumns columns={1} text={specialThanks} />
      </section>

      <section>
        download the <a href="/presskit-toughlovearena-2022-04-26.zip"> presskit
        </a>
      </section>
    </div>
  );
};
