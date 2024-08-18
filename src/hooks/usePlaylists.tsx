import { use, useState } from "react";

type PlaylistsType = {
  type: "All" | "Favorites" | "Category";
  category?: number;
};

const usePlaylists = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState("");
  const [isShuffle, setIsShuffle] = useState(false);

  const shufflePlaylist = () => {
    if (isShuffle) {
    } else {
    }
    setIsShuffle((shuffle) => !shuffle);
  };

  const changePlaylist = ({ type, category }: PlaylistsType) => {};

  const getCategories = () => {};

  return { currentPlaylist, shufflePlaylist, changePlaylist };
};

export default usePlaylists;
