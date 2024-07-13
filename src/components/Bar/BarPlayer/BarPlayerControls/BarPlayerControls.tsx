"use client";
import React from "react";
import styles from "./BarPlayerControls.module.css";
import classNames from "classnames";
import Toast, { handleWarning } from "@/components/Toast/Toast";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  setNextTrack,
  setPreviousTrack,
  setShufflePlaylist,
  setTrack,
} from "@/store/features/trackSlice";

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
  const dispatch = useAppDispatch();
  const isShuffle = useAppSelector((state) => state.track.isShuffleState);

  const playerBtnRepeatClass = classNames({
    [styles.playerBtnRepeat]: true,
    [styles.active]: isRepeat,
  });

  const inWorking = () => {
    handleWarning("В разработке");
  };

  return (
    <div className={styles.playerControls}>
      <div
        className={classNames(styles.playerBtnPrev)}
        onClick={() => dispatch(setPreviousTrack())}
      >
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
      <div className={classNames(styles.playerBtnNext)} onClick={() => dispatch(setNextTrack())}>
        <svg className={styles.playerBtnNextSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </svg>
      </div>
      <div className={playerBtnRepeatClass} onClick={toggleRepeat}>
        <svg className={styles.playerBtnRepeatSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </svg>
      </div>
      <div
        className={classNames({ [styles.playerBtnShuffle]: true, [styles.active]: isShuffle })}
        onClick={() => dispatch(setShufflePlaylist(!isShuffle))}
      >
        <svg className={styles.playerBtnShuffleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </svg>
      </div>
      <Toast />
    </div>
  );
};

export default BarPlayerControls;
