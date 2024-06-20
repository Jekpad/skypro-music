"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./PlaylistItem.module.css";

const PlaylistItemSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
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
                <Skeleton width={"100px"} />
                <span className={styles.trackTitleSpan}>
                  <Skeleton width={"100px"} />
                </span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="#">
              <Skeleton width={"100px"} />
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="#">
              <Skeleton width={"100px"} />
            </a>
          </div>
          <div className={styles.trackTime}>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText}>
              <Skeleton />
            </span>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default PlaylistItemSkeleton;
