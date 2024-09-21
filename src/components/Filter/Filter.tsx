"use client";
import FilterItem from "./FilterItem/FilterItem";
import { getUniqueValues } from "@/helpers/getUniqueValues";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import styles from "./Filter.module.css";
import { FilterType } from "@/types/filter";
import { filterPlaylist } from "@/store/features/trackSlice";

const DATES_FILTER: string[] = ["По умолчанию", "Сначала новые", "Сначала старые"];

const useFilter = (type: FilterType["type"]) => {
  const previousValue = useRef<string | undefined>();
  const [value, setValue] = useState<string | undefined>();

  const dispatch = useAppDispatch();

  const fulter = (value: string) => {
    const operation = previousValue.current === value ? "delete" : "add";
    previousValue.current === value ? setValue(undefined) : setValue(value);
    previousValue.current = previousValue.current === value ? "" : value;

    dispatch(filterPlaylist({ operation, filter: { type, value } }));
  };

  return { value, fulter };
};

const Filter = () => {
  const tracks = useAppSelector((state) => state.track.initialPlaylistState);

  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const authorList = tracks ? getUniqueValues(tracks, "author") : [];
  const genreList = tracks ? getUniqueValues(tracks, "genre") : [];

  const { value: currentAuthor, fulter: filterAuthor } = useFilter("author");
  const { value: currentGenre, fulter: filterGenre } = useFilter("genre");

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
        currentValue={currentAuthor}
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
        currentValue={currentGenre}
        handleFilter={filterGenre}
      />
    </div>
  );
};

export default Filter;
