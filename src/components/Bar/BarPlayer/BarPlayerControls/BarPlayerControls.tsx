import stylesMain from "./BarPlayerControls.module.css";
import stylesIcons from "../icons.module.css";
import classNames from "classnames";

const BarPlayerControls = () => {
  return (
    <div className={stylesMain.playerControls}>
      <div className={stylesMain.playerBtnPrev}>
        <svg className={stylesMain.playerBtnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className={stylesMain.playerBtnPlay}>
        <svg className={stylesMain.playerBtnPlaySvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-play" />
        </svg>
      </div>
      <div className={stylesMain.playerBtnNext}>
        <svg className={stylesMain.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className={classNames(stylesMain.playerBtnRepeat, stylesIcons["_btn-icon"])}>
        <svg className={stylesMain.playerBtnRepeatSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className={classNames(stylesMain.playerBtnShuffle, stylesIcons["_btn-icon"])}>
        <svg className={stylesMain.playerBtnShuffleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
    </div>
  );
};

export default BarPlayerControls;
