import { GalleryItem } from '../../interfaces';
import { useDocumentSize } from '../../hooks/useDocumentSize';
import styles from './Gallery.module.css'
import { ExternalLink } from '../ExternalLink';

const GalleryPreview = (props: {
  item: GalleryItem;
  columns: number;
  galleryWidth: number;
}) => {
  const width = Math.floor(props.galleryWidth / props.columns);
  const height = Math.floor(width / (16 / 9));
  return (
    <ExternalLink href={props.item.original}>
      <div className={styles.preview} style={{
        width: `${width}px`,
        height: `${height}px`,
      }}>
        <div className={styles.background} style={{
          backgroundImage: `url(${props.item.preview})`,
        }}></div>
        <div className={styles.description}>
          <div>{props.item.description}</div>
          {props.item.when && (
            <div>{props.item.when}</div>
          )}
        </div>
      </div>
    </ExternalLink>
  );
}

const Gallery = ({ data }: { data: GalleryItem[], }) => {
  const { width } = useDocumentSize();
  const minWidth = 300;
  const maxColumns = 3;
  const columns = Math.min(maxColumns, Math.floor(width / minWidth));

  return (
    <div className={styles.gallery}>
      {data.map((item, i) => (
        <GalleryPreview
          key={i}
          item={item}
          columns={columns}
          galleryWidth={width}
        />
      ))}
    </div>
  );
};

export default Gallery;
