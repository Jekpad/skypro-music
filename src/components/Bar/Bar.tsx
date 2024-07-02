"use client";

import { useCurrentTrack } from "@/contexts/CurrentTrackContext";
import styles from "./Bar.module.css";
import BarPlayer from "./BarPlayer/BarPlayer";
import BarPlayerProgress from "./BarPlayerProgress/BarPlayerProgress";
import BarVolume from "./BarVolume/BarVolume";
import { useRef, useEffect, useState, useCallback, use } from "react";

const Bar = () => {
  const refAudio = useRef<HTMLAudioElement | null>(null);
  const { currentTrack } = useCurrentTrack();
  const [volume, setVolume] = useState<number>(0.5);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  const audio = refAudio?.current ?? null;

  const togglePlay = () => {
    if (!audio || !currentTrack) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleRepeat = () => {
    if (!audio) return;

    if (isRepeat) {
      audio.loop = false;
    } else {
      audio.loop = true;
    }
    setIsRepeat((prev) => !prev);
  };

  const duration = refAudio.current?.duration || 0;

  useEffect(() => {
    if (!audio || !currentTrack) return;

    if (refAudio.current) {
      audio.play();
      setIsPlaying(true);
    }
  }, [audio, currentTrack]);

  useEffect(() => {
    if (!refAudio.current) return;
    refAudio.current.volume = volume;
  }, [volume]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!refAudio.current) return;
    refAudio.current.currentTime = Number(e.currentTarget.value);
  };

  return (
    <fieldset className={styles.bar} disabled={currentTrack === null}>
      <div className={styles.barContent}>
        <BarPlayerProgress max={duration} value={currentTime} step={0.01} onChange={handleSeek} />
        <div className={styles.barPlayerBlock}>
          <BarPlayer
            track={currentTrack}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            isRepeat={isRepeat}
            toggleRepeat={toggleRepeat}
            currentTime={currentTime}
            duration={duration}
          />
          <BarVolume
            value={volume}
            step={0.01}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
        <audio
          ref={refAudio}
          src={currentTrack?.track_file}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        ></audio>
      </div>
    </fieldset>
  );
};

export default Bar;
