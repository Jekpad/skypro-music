import styles from "./Playlist.module.css";
import mocData from "../../lib/mocData";
import PlaylistItem from "./PlaylistItem/PlaylistItem";
import classNames from "classnames";

const Playlist = () => {
  return (
    <div className={styles.playlistContent}>
      <div className={styles.playlistTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.playlist}>
        {mocData.map((track, index) => (
          <PlaylistItem
            key={index}
            Title={track.Title}
            Subtitle={track.Subtitle}
            Author={track.Author}
            Album={track.Album}
            TrackTime={track.TrackTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
