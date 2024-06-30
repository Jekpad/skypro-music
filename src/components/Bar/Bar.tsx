"use client";

import { useCurrentTrack } from "@/contexts/CurrentTrackContext";
import styles from "./Bar.module.css";
import BarPlayer from "./BarPlayer/BarPlayer";
import BarPlayerProgress from "./BarPlayerProgress/BarPlayerProgress";
import BarVolume from "./BarVolume/BarVolume";
import { useRef, useEffect, useState, useCallback, use } from "react";

const Bar = () => {
  const refAudio = useRef<HTMLAudioElement | null>(null);
  const { currentTrack, setCurrentTrack } = useCurrentTrack();
  const [volume, setVolume] = useState<number>(0.5);
  const [isEnded, setIsEnded] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const duration = refAudio.current?.duration || 0;

  // const handleEnd = useCallback(() => {
  //   setIsEnded(true);
  //   setCurrentTrack(null);
  // }, []);

  useEffect(() => {
    if (refAudio.current) {
      refAudio.current.play();
    }

    // const audio = refAudio.current;
    // audio?.addEventListener("ended", handleEnd);

    // return () => {
    //   audio?.removeEventListener("ended", handleEnd);
    // };
  }, [currentTrack]);

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
          <BarPlayer track={currentTrack} refAudio={refAudio} />
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
