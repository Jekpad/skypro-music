import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={`${styles.centerblockFilter} filter`}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={`${styles.filterButton} button-author _btn-text`}>исполнителю</div>
      <div className={`${styles.filterButton} button-year _btn-text`}>году выпуска</div>
      <div className={`${styles.filterButton} button-genre _btn-text`}>жанру</div>
    </div>
  );
};

export default Filter;
