import { Articles, Social } from "../../data/links";
import { useDocumentSize } from "../../hooks/useDocumentSize";
import { ArticleLink } from "../../interfaces";
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

const ArticleQuote = (article: ArticleLink) => (
  <div className={styles.quoteBox}>
    <div className={styles.quoteSnippet}>
      {article.quote}
    </div>
    <div className={styles.quoteAuthor}>
      <i>{article.author}</i>
      {' '}
      [<ExternalLink href={article.url}>{article.site}</ExternalLink>]
    </div>
  </div>
);

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
          Praise for Tough Love Arena
        </div>
      </section>

      <section>
        <div className={styles.quoteSection}>
          <aside className={styles.quoteColumn}>
            {Articles.filter((a, i) => i % 2 === 0).map(ArticleQuote)}
          </aside>
          <aside className={styles.quoteColumn}>
            {Articles.filter((a, i) => i % 2 === 1).map(ArticleQuote)}
          </aside>
        </div>
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

      <section>
        Have a question or issue?
        <br/>
        Send an email to <b>hello (at) toughlovearena (dot) com</b>
      </section>

      <div className={styles.gap}></div>

      <section>
        <div className={styles.large}>
          About the Team
        </div>
      </section>

      <section>
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
        <div className={styles.medium}>
          Alpha Playtesters
        </div>
      </section>
      <section>
        <TextColumns columns={columns} text={playtesters} />
      </section>
      <section>
        <div className={styles.medium}>
          Special Thanks
        </div>
      </section>
      <section>
        <TextColumns columns={1} text={specialThanks} />
      </section>

      <section>
        download the <a href="/presskit-toughlovearena-2022-04-26.zip"> presskit
        </a>
      </section>
    </div>
  );
};
