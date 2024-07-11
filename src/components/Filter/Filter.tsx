"use client";
import styles from "./Filter.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { getUniqueValues } from "@/helpers/getUniqueValues";
import { useState } from "react";
import { useAppSelector } from "@/store/store";

const DATES_FILTER: string[] = ["По умолчанию", "Сначала новые", "Сначала старые"];

const Filter = () => {
  const tracks = useAppSelector((state) => state.track.currentPlaylistState);

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const authorList = getUniqueValues(tracks, "author");
  const genreList = getUniqueValues(tracks, "genre");

  const handleFilter = (newFilter: string) => {
    setSelectedFilter((currentFilter) => (currentFilter === newFilter ? null : newFilter));
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem
        title={"исполнителю"}
        isActive={selectedFilter == "исполнителю"}
        filterList={authorList}
        handleFilter={handleFilter}
      />
      <FilterItem
        title={"году выпуска"}
        isActive={selectedFilter == "году выпуска"}
        filterList={DATES_FILTER}
        handleFilter={handleFilter}
      />
      <FilterItem
        title={"жанру"}
        isActive={selectedFilter == "жанру"}
        filterList={genreList}
        handleFilter={handleFilter}
      />
    </div>
  );
};

export default Filter;
