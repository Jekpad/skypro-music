import stylesMain from "./BarPlayerTrackPlay.module.css";
import stylesIcons from "../icons.module.css";
import classNames from "classnames";
import { TrackType } from "@/types/tracks";

type TrackPlayProps = {
  name: string;
  author: string;
};

const BarPlayerTrackPlay = ({ name, author }: TrackPlayProps) => {
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
      <div className={stylesMain.trackPlayLikeDis}>
        <div className={classNames(stylesMain.trackPlayLike, stylesIcons["_btn-icon"])}>
          <svg className={stylesMain.trackPlayLikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className={classNames(stylesMain.trackPlayDislike, stylesIcons["_btn-icon"])}>
          <svg className={stylesMain.trackPlayDislikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BarPlayerTrackPlay;
