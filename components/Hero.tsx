import styles from './Hero.module.css'

export default () => (
  <div className={styles.hero}>
    <div className={styles.content}>
      Tough Love Arena is a web-based, indie fighting game with rollback netcode that's 100% free to play!
    </div>
    <video
      className={styles.video}
      autoPlay={true}
      muted={true}
      loop={true}
    >
      <source src="asset/demo_480p.mp4" type="video/mp4"></source>
    </video>
  </div>
);
