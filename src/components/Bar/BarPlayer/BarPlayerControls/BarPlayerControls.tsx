"use client";
import React from "react";
import styles from "./BarPlayerControls.module.css";
import classNames from "classnames";
import Toast, { handleWarning } from "@/components/Toast/Toast";

type PlayerControlsProps = {
  isPlaying: boolean;
  togglePlay: () => void;
  isRepeat: boolean;
  toggleRepeat: () => void;
};

const BarPlayerControls = ({
  isPlaying,
  togglePlay,
  isRepeat,
  toggleRepeat,
}: PlayerControlsProps) => {
  const playerBtnRepeatClass = classNames({
    [styles.playerBtnRepeat]: true,
    [styles.active]: isRepeat,
  });

  const inWorking = () => {
    handleWarning("В разработке");
  };

  return (
    <div className={styles.playerControls}>
      <div className={classNames(styles.playerBtnPrev)} onClick={inWorking}>
        <svg className={styles.playerBtnPrevSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </svg>
      </div>
      <div className={classNames(styles.playerBtnPlay)} onClick={togglePlay}>
        <svg className={styles.playerBtnPlaySvg}>
          {isPlaying ? (
            <use xlinkHref="img/icon/sprite.svg#icon-pause" />
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          )}
        </svg>
      </div>
      <div className={classNames(styles.playerBtnNext)} onClick={inWorking}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className={playerBtnRepeatClass} onClick={toggleRepeat}>
        <svg className={styles.playerBtnRepeatSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div className={classNames(styles.playerBtnShuffle)} onClick={inWorking}>
        <svg className={styles.playerBtnShuffleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
      <Toast />
    </div>
  );
};

export default BarPlayerControls;
