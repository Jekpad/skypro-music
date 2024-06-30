import styles from "./Playlist.module.css";
import PlaylistItem from "./PlaylistItem/PlaylistItem";
import classNames from "classnames";
import PlaylistItemSkeleton from "./PlaylistItem/PlaylistItemSkeleton";
import { TrackType } from "@/types/tracks";

interface Props {
  tracks: TrackType[];
  isLoading: boolean;
}

const Playlist = ({ tracks, isLoading }: Props) => {
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
        {isLoading && <PlaylistItemSkeleton items={20} />}
        {Array.isArray(tracks) &&
          tracks.map((track) => <PlaylistItem key={track.id} track={track} />)}
      </div>
    </div>
  );
};

export default Playlist;
