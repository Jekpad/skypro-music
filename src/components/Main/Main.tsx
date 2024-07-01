"use client";

import Search from "../Search/Search";
import styles from "./Main.module.css";
import Filter from "../Filter/Filter";
import Playlist from "../Playlist/Playlist";
import useAllTracks from "@/hooks/useAllTracks";

const Main = () => {
  const [tracks, isLoading, isError] = useAllTracks();
  return (
    <div className={styles.centerblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <Playlist tracks={tracks} isLoading={isLoading} />
    </div>
  );
};

export default Main;
