import classNames from "classnames";
import styles from "./BarPlayer.module.css";
import BarPlayerControls from "./BarPlayerControls/BarPlayerControls";
import BarPlayerTrackPlay from "./BarPlayerTrackPlay/BarPlayerTrackPlay";
import { TrackType } from "@/types/tracks";

type BarPlayerProps = {
  track: TrackType | null;
  refAudio?: React.RefObject<HTMLAudioElement>;
};

const BarPlayer = ({ track, refAudio }: BarPlayerProps) => {
  return (
    <div className={classNames(styles.barPlayer, "player")}>
      <BarPlayerControls refAudio={refAudio} />
      <BarPlayerTrackPlay name={track?.name || ""} author={track?.author || ""} />
    </div>
  );
};

export default BarPlayer;
