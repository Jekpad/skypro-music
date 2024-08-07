"use client";

import stylesMain from "./BarPlayerTrackPlay.module.css";
import classNames from "classnames";
import Toast, { handleWarning } from "@/components/Toast/Toast";
import { serializeTrackTime } from "@/helpers/serializeTrackTime";

type TrackPlayProps = {
  name: string;
  author: string;
  currentTime: number;
  duration: number;
};

const inWorking = () => {
  handleWarning("В разработке");
};

const BarPlayerTrackPlay = ({ name, author, currentTime, duration }: TrackPlayProps) => {
  const formatedTime = serializeTrackTime(currentTime);
  const formatedDuration = serializeTrackTime(duration);

  return (
    <div className={stylesMain.trackPlay}>
      <div className={stylesMain.trackPlayContain}>
        <div className={stylesMain.trackPlayImage}>
          <svg className={stylesMain.trackPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={stylesMain.trackPlayAuthor}>
          <a className={stylesMain.trackPlayAuthorLink} href="http://">
            {name}
          </a>
        </div>
        <div className={stylesMain.trackPlayAlbum}>
          <a className={stylesMain.trackPlayAlbumLink} href="http://">
            {author}
          </a>
        </div>
      </div>
      <div className={stylesMain.trackPlayTime}>
        {formatedTime} / {formatedDuration}
      </div>
      <div className={stylesMain.trackPlayLikeDis}>
        <div className={classNames(stylesMain.trackPlayLike)} onClick={inWorking}>
          <svg className={stylesMain.trackPlayLikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className={classNames(stylesMain.trackPlayDislike)} onClick={inWorking}>
          <svg className={stylesMain.trackPlayDislikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default BarPlayerTrackPlay;
