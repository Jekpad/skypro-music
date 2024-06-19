import classNames from "classnames";
import styles from "./BarVolume.module.css";

const BarVolume = () => {
  return (
    <div className={styles.volume}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, "_btn")}>
          <input className={classNames(styles.volumeProgressLine, "_btn")} name="range" type="range" />
        </div>
      </div>
    </div>
  );
};

export default BarVolume;
