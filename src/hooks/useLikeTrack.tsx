"use client";

import { dislikeTrack, likeTrack } from "@/services/api";
import { setDislikeTrack, setLikeTrack } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

const useLikeTrack = (trackID: number) => {
  // const tokens = useAppSelector(state => state.auth.rokes);
  const dispatch = useAppDispatch();

  const tokens = {
    access: "",
    refresh: "",
  };
  const likedTraks = useAppSelector((state) => state.track.likedPlaylistState);
  //   Получаем состояние лайка из избранных треков
  // или получать в качестве пропса
  const isLiked = !!likedTraks.find((track) => track.id === trackID);

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!tokens.access || !tokens.refresh) return alert("Вы не авторизованы!");

    const action = isLiked ? dislikeTrack : likeTrack;

    try {
      await action({
        trackId: trackID,
        access: tokens.access,
        refresh: tokens.refresh,
      });

      if (isLiked) {
        dispatch(setDislikeTrack(trackID));
      } else {
        dispatch(setLikeTrack(trackID));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { handleLike, isLiked };
};

export default useLikeTrack;
