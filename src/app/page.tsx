"use client";

import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import Footer from "@/components/Footer/Footer";
import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import Main from "@/components/Main/Main";
import { SkeletonTheme } from "react-loading-skeleton";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getFavoriteTrack, getInitialPlaylist } from "@/store/features/trackSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();

  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);

  useEffect(() => {
    const getAllTracks = async () => {
      await dispatch(getInitialPlaylist());

      if (accessToken && refreshToken) {
        await dispatch(getFavoriteTrack({ accessToken, refreshToken }));
      }
    };

    getAllTracks();
  }, [dispatch, accessToken, refreshToken]);

  return (
    <Wrapper>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <main className={styles.main}>
          <Nav />
          <Main />
          <Sidebar />
        </main>
        <Bar />
        <Footer />
      </SkeletonTheme>
    </Wrapper>
  );
}
