import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import Footer from "@/components/Footer/Footer";
import Bar from "@/components/Bar/Bar";
import Nav from "@/components/Nav/Nav";
import Main from "@/components/Main/Main";
import { SkeletonTheme } from "react-loading-skeleton";

export default function Home() {
  return (
    <Wrapper>
      <main className={styles.main}>
        <Nav />
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Main />
        </SkeletonTheme>
        <Sidebar />
      </main>
      <Bar />
      <Footer />
    </Wrapper>
  );
}
