import classNames from "classnames";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={classNames(styles.filterButton, styles["_btn-text"], "button-author")}>исполнителю</div>
      <div className={classNames(styles.filterButton, styles["_btn-text"], "button-year")}>году выпуска</div>
      <div className={classNames(styles.filterButton, styles["_btn-text"], "button-genre")}>жанру</div>
    </div>
  );
};

export default Filter;
