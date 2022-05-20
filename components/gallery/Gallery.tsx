import { useCallback, useEffect, useState } from 'react';
import { GalleryItem } from '../../interfaces';
import styles from './Gallery.module.css'

const GalleryPreview = (props: {
  item: GalleryItem;
  columns: number;
  galleryWidth: number;
}) => {
  const width = Math.floor(props.galleryWidth / props.columns);
  const height = Math.floor(width / (16 / 9));
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
          <div>{props.item.description}</div>
          {props.item.when && (
            <div>{props.item.when}</div>
          )}
        </div>
      </div>
    </a>
  );
}

const Gallery = ({ data }: { data: GalleryItem[], }) => {
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

  const minWidth = 600;
  const columns = Math.ceil(width / minWidth);

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
