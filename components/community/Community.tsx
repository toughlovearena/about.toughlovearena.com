import { CommunityResources, YouTubeVideos } from "../../data/links";
import { sortArrayOfObjects } from "../../utils/list";
import { Column } from "../Column";
import { ExternalLink } from "../ExternalLink";
import { YouTubePreview } from "../YouTubePreview";
import styles from './Community.module.css';

export const Community = () => {
  const videos = sortArrayOfObjects(YouTubeVideos, art => art.date).reverse();
  return (
    <div className={styles.container}>
      <Column>
        <section>
          <div className={styles.large}>
            Community Made Guides and Resources
          </div>
        </section>
        <section>
          {CommunityResources.map(link => (
            <div>
              <ExternalLink href={link.url}>{link.title}</ExternalLink>
            </div>
          ))}
        </section>
        <section>
          <div className={styles.large}>
            YouTube videos featuring Tough Love Arena
          </div>
        </section>
        <section>
          <div className={styles.youtube}>
            {videos.map(link => <YouTubePreview key={link.vid} link={link} blockStyle={{width: 380,}} />)}
          </div>
        </section>
      </Column>
    </div>
  );
}
