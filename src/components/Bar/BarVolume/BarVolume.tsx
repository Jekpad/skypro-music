import styles from "./BarVolume.module.css";

const BarVolume = () => {
  return (
    <div className={`${styles.barVolumeBlock} volume`}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={`${styles.volumeProgress} _btn`}>
          <input className={`${styles.volumeProgressLine} _btn`} name="range" type="range" />
        </div>
      </div>
    </div>
  );
};

export default BarVolume;
