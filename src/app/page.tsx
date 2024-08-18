"use client";

import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import Footer from "@/components/Footer/Footer";
import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import Main from "@/components/Main/Main";
import { SkeletonTheme } from "react-loading-skeleton";
import { useAppDispatch } from "@/store/store";
import { getInitialPlaylist } from "@/store/features/trackSlice";
import { useEffect } from "react";
import useUserAuth from "@/hooks/useUserAuth";

export default function Home() {
  const dispatch = useAppDispatch();
  const { checkLogin } = useUserAuth();

  useEffect(() => {
    const initialApp = async () => {
      await dispatch(getInitialPlaylist());
      await checkLogin();
    };

    initialApp();
  }, []);

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
