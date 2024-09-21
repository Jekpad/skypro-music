"use client";
import FilterItem from "./FilterItem/FilterItem";
import { getUniqueValues } from "@/helpers/getUniqueValues";
import { useState } from "react";
import { useAppSelector } from "@/store/store";
import styles from "./Filter.module.css";
import useFilter from "@/hooks/useFilter";

const DATES_FILTER: string[] = ["По умолчанию", "Сначала новые", "Сначала старые"];

const Filter = () => {
  const tracks = useAppSelector((state) => state.track.initialPlaylistState);

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const authorList = tracks ? getUniqueValues(tracks, "author") : [];
  const genreList = tracks ? getUniqueValues(tracks, "genre") : [];

  const { values: currentAuthors, filter: filterAuthor } = useFilter("author");
  const { values: currentGenres, filter: filterGenre } = useFilter("genre");

  const toggleOpen = (newFilter: string) => {
    setSelectedFilter((currentFilter) => (currentFilter === newFilter ? null : newFilter));
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem
        title={"исполнителю"}
        isActive={selectedFilter == "исполнителю"}
        filterList={authorList}
        toggleOpen={toggleOpen}
        currentValues={currentAuthors}
        handleFilter={filterAuthor}
      />
      <FilterItem
        title={"году выпуска"}
        isActive={selectedFilter == "году выпуска"}
        filterList={DATES_FILTER}
        toggleOpen={toggleOpen}
      />
      <FilterItem
        title={"жанру"}
        isActive={selectedFilter == "жанру"}
        filterList={genreList}
        toggleOpen={toggleOpen}
        currentValues={currentGenres}
        handleFilter={filterGenre}
      />
    </div>
  );
};

export default Filter;
