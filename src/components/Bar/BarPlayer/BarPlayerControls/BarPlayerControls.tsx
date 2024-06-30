"use client";
import React from "react";
import stylesMain from "./BarPlayerControls.module.css";
import stylesIcons from "../icons.module.css";
import classNames from "classnames";
import { useState } from "react";
type PlayerControlsProps = {
  refAudio?: React.RefObject<HTMLAudioElement>;
};

const BarPlayerControls = ({ refAudio }: PlayerControlsProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  const togglePlay = () => {
    const audio = refAudio?.current ?? null;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleRepeat = () => {
    const audio = refAudio?.current ?? null;

    if (!audio) return;

    if (isRepeat) {
      audio.loop = false;
    } else {
      audio.loop = true;
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={stylesMain.playerControls}>
      <div className={classNames(stylesMain.playerBtnPrev, stylesIcons["_btn-icon"])}>
        <svg className={stylesMain.playerBtnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div
        className={classNames(stylesMain.playerBtnPlay, stylesIcons["_btn-icon"])}
        onClick={togglePlay}
      >
        <svg className={stylesMain.playerBtnPlaySvg}>
          {isPlaying ? (
            <use xlinkHref="img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          )}
        </svg>
      </div>
      <div className={classNames(stylesMain.playerBtnNext, stylesIcons["_btn-icon"])}>
        <svg className={stylesMain.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div
        className={classNames(stylesMain.playerBtnRepeat, stylesIcons["_btn-icon"])}
        onClick={toggleRepeat}
      >
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
