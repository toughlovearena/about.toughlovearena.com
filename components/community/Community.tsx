import { CommunityResources, YouTubeVideos } from "../../data/links";
import { sortArrayOfObjects } from "../../utils/list";
import { Column } from "../Column";
import { ExternalLink } from "../ExternalLink";
import { YouTubeGallery } from "../YouTubePreview";
import styles from './Community.module.css';

export const Community = () => {
  const videos = sortArrayOfObjects(YouTubeVideos, art => art.date).reverse();
  return (
    <div className={styles.container}>
      <Column>
        <section>
          <div className={styles.large}>
            Community Resources
          </div>
        </section>
        <section>
          {CommunityResources.map(link => (
            <div>
              <ExternalLink href={link.url}>{link.title}</ExternalLink>
            </div>
          ))}
        </section>
        <YouTubeGallery links={videos} />
      </Column>
    </div>
  );
}
