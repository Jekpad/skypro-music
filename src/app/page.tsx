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
import { setInitialPlaylist } from "@/store/features/trackSlice";
import { useEffect } from "react";
import { getAllTracks } from "@/services/api";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAllTracks = async () => {
      try {
        const data = await getAllTracks();
        dispatch(setInitialPlaylist(data));
      } catch (err) {
      } finally {
      }
    };

    fetchAllTracks();
  }, [dispatch]);

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
