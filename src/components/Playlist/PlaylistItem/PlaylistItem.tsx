"use client";

import { TrackType } from "@/types/tracks";
import styles from "./PlaylistItem.module.css";
import { serializeTrackTime } from "@/helpers/serializeTrackTime";
import { useCurrentTrack } from "@/contexts/CurrentTrackContext";
import classNames from "classnames";

type Props = {
  track: TrackType;
};

const PlaylistItem = ({ track }: Props) => {
  const { currentTrack, setCurrentTrack } = useCurrentTrack();

  const { name, author, album, duration_in_seconds } = track;

  const hadleSelectTrack = () => {
    setCurrentTrack(track);
  };

  const trackTitleImageClass = classNames({
    [styles.trackTitleImage]: true,
    [styles.selected]: track === currentTrack,
  });

  return (
    <div onClick={hadleSelectTrack} className={styles.playlistItem}>
      <div className={styles.track}>
        <div className={styles.trackTitle}>
          <div className={trackTitleImageClass}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name}
              {/* <span className={styles.trackTitleSpan}></span> */}
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{serializeTrackTime(duration_in_seconds)}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
