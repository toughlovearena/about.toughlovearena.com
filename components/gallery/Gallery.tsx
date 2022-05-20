import { useCallback, useEffect, useState } from 'react';
import { GalleryItem } from '../../interfaces';
import styles from './Gallery.module.css'

const GalleryPreview = (props: {
  item: GalleryItem;
  columns: number;
  galleryWidth: number;
}) => {
  const width = props.galleryWidth / props.columns;
  const height = width * (3 / 4);
  return (
    <a href={props.item.url} target="_blank">
      <div className={styles.preview} style={{
        width: `${width}px`,
        height: `${height}px`,
      }}>
        <div className={styles.background} style={{
          backgroundImage: `url(${props.item.url})`,
        }}></div>
        <div className={styles.description}>
          {props.item.description}
        </div>
      </div>
    </a>
  );
}

const Gallery = ({ data }: { data: GalleryItem[], }) => {
  const columns = 3;
  const [width, setWidth] = useState(100);

  const updateWidth = useCallback(() => {
    setWidth(document.body.clientWidth);
  }, [setWidth]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [updateWidth]);

  // init
  useEffect(() => {
    updateWidth();
  }, []);

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
