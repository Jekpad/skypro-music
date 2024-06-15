import Search from "../Search/Search";
import styles from "./Main.module.css";
import Filter from "../Filter/Filter";
import Playlist from "../Playlist/Playlist";

const Main = () => {
  return (
    <div className={`${styles.mainCenterblock} centerblock`}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter />
      <Playlist />
    </div>
  );
};

export default Main;
