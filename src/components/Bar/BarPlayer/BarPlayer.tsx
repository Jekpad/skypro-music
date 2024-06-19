import classNames from "classnames";
import styles from "./BarPlayer.module.css";
import BarPlayerControls from "./BarPlayerControls/BarPlayerControls";
import BarPlayerTrackPlay from "./BarPlayerTrackPlay/BarPlayerTrackPlay";

const BarPlayer = () => {
  return (
    <div className={classNames(styles.barPlayer, "player")}>
      <BarPlayerControls />
      <BarPlayerTrackPlay />
    </div>
  );
};

export default BarPlayer;
