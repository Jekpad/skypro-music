import styles from "./PlaylistItem.module.css";

interface Props {
  Title?: string;
  Subtitle?: string;
  Author?: string;
  Album?: string;
  TrackTime?: string;
}

const PlaylistItem = ({ Title, Subtitle = "", Author, Album, TrackTime }: Props) => {
  return (
    <div className={styles.playlistItem}>
      <div className={styles.track}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <a className={styles.trackTitleLink} href="#">
              {Title}
              <span className={styles.trackTitleSpan}>{Subtitle}</span>
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="#">
            {Author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="#">
            {Album}
          </a>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{TrackTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
