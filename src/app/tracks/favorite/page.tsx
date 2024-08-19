"use client";

import Routes from "@/app/Routes";
import Main from "@/components/Main/Main";
import { getFavoriteTrack, setInitialPlaylist } from "@/store/features/trackSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      router.push(Routes.BASE);
      return;
    }

    const getTracks = async () => {
      try {
        const favTracks = await dispatch(getFavoriteTrack({ accessToken, refreshToken })).unwrap();
        dispatch(setInitialPlaylist(favTracks));
      } catch (error) {}
    };

    getTracks();
  }, []);

  return <Main title={"Избранное"} />;
}
