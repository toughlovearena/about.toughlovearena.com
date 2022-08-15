import { YouTubeVideos } from "../../data/links";
import { sortArrayOfObjects } from "../../utils/list";
import { YouTubeGallery } from "../YouTubePreview";

export const Community = () => {
  const videos = sortArrayOfObjects(YouTubeVideos, art => art.date).reverse();
  return (
    <div>
      <YouTubeGallery links={videos} />
    </div>
  );
}
