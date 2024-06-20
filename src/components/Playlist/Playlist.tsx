"use client";

import styles from "./Playlist.module.css";
import mocData from "../../lib/mocData";
import PlaylistItem from "./PlaylistItem/PlaylistItem";
import classNames from "classnames";
import useAllTracks from "@/hooks/useAllTracks";
import { serializeTrackTime } from "@/helpers/serializeTrackTime";
import PlaylistItemSkeleton from "./PlaylistItem/PlaylistItemSkeleton";

const Playlist = () => {
  const [tracks, isLoading, isError] = useAllTracks();

  let traksList: Array<any> = [];

  if (Array.isArray(tracks)) {
    traksList = tracks.map((track) => (
      <PlaylistItem
        key={track.id}
        Title={track.name}
        // Subtitle={track.Subtitle}
        Author={track.author}
        Album={track.album}
        TrackTime={serializeTrackTime(track.duration_in_seconds)}
      />
    ));
  }

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
        {isLoading && <PlaylistItemSkeleton items={10} />}
        {traksList}
      </div>
    </div>
  );
};

export default Playlist;
