import { GalleryItem } from '../../interfaces';
import { Column } from '../Column';
import styles from './Gallery.module.css'

const GalleryPreview = (props: { item: GalleryItem; }) => (
  <div style={{
    textAlign: 'center',
    margin: '1em',
    width: '350px',
  }}>
    <a href={props.item.url} target="_blank">
      <img src={props.item.url} style={{
        height: 'auto',
        width: '100%',
      }} />
    </a>
    <div>
      <i>{props.item.description}</i>
    </div>
  </div>
)

const Gallery = ({ data }: { data: GalleryItem[], }) => {
  return (
    <Column>
      <div className={styles.gallery}>
        {data.map((item, i) => (
          <GalleryPreview key={i} item={item} />
        ))}
      </div>
    </Column>
  );
};

export default Gallery;
