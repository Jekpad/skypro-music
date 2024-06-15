import styles from "./Bar.module.css";
import BarPlayer from "./BarPlayer/BarPlayer";
import BarPlayerProgress from "./BarPlayerProgress/BarPlayerProgress";
import BarVolume from "./BarVolume/BarVolume";

const Bar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <BarPlayerProgress />
        <div className={styles.barPlayerBlock}>
          <BarPlayer />
          <BarVolume />
        </div>
      </div>
    </div>
  );
};

export default Bar;
