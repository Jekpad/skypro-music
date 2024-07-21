import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import Playlist from "../Playlist/Playlist";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.centerblock}>
      <div className={styles.stickyContent}>
        <Search />
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter />
      </div>

      <Playlist />
    </div>
  );
};

export default Main;
