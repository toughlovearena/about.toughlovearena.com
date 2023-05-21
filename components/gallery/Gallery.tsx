import { GalleryItem } from '../../interfaces';
import { useDocumentSize } from '../../hooks/useDocumentSize';
import styles from './Gallery.module.css'
import { ExternalLink } from '../ExternalLink';

const GalleryPreview = (props: {
  item: GalleryItem;
  columns: number;
}) => {
  return (
    <ExternalLink href={props.item.original} style={{
      flexBasis: `${100 / props.columns}%`,
    }}>
      <div className={styles.preview}>
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
        />
      ))}
    </div>
  );
};

export default Gallery;
