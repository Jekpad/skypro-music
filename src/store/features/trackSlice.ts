import { createAsyncThunk, createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/types/tracks";
import { fetchFavoriteTracks, getAllTracks } from "@/services/api";
import { FilterType } from "@/types/filter";
import { SortType } from "@/types/sort";

type TrackStateType = {
  initialPlaylistState?: TrackType[];
  currentPlaylistState?: TrackType[];
  likedPlaylistState: TrackType[];
  currentTrackState: TrackType | undefined;
  currentPlaylistTypeState: "All" | "Favorites" | "Сollection";
  isPlayingState: boolean;
  isShuffleState: boolean;
  filters: Partial<Record<FilterType["type"], FilterType>>;
  sort: Partial<Record<SortType["type"], SortType>>;
};

const initialState: TrackStateType = {
  initialPlaylistState: undefined,
  currentPlaylistState: undefined,
  likedPlaylistState: [],
  currentTrackState: undefined,
  currentPlaylistTypeState: "All",
  isPlayingState: false,
  isShuffleState: false,
  filters: {},
  sort: {},
};

export const getInitialPlaylist = createAsyncThunk<TrackType[], void, { rejectValue: string }>(
  "playlist/getInitialPlaylist",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllTracks();
      const tracks = data.map((track: { _id: string; [key: string]: any }) => {
        const { _id, ...rest } = track;
        return { id: _id, ...rest };
      });
      return tracks;
    } catch (err) {
      return rejectWithValue("Произошла ошибка при получении списка треков");
    }
  }
);

export const getFavoriteTrack = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async (
    { accessToken, refreshToken }: { accessToken: string; refreshToken: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await fetchFavoriteTracks({ accessToken, refreshToken });

      const tracks = data.data.map((track: { _id: string; [key: string]: any }) => {
        const { _id, ...rest } = track;
        return { id: _id, ...rest };
      });
      return tracks;
    } catch (err) {
      return rejectWithValue("Произошла ошибка при получении любимых треков");
    }
  }
);

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setPlaylistType: (state, action: PayloadAction<"All" | "Favorites" | "Сollection">) => {
      state.currentPlaylistTypeState = action.payload;
    },
    setTrack: (state, action: PayloadAction<TrackType | undefined>) => {
      state.currentTrackState = action.payload;
    },
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.currentPlaylistState = action.payload;
      state.initialPlaylistState = action.payload;
    },
    setPreviousTrack: (state) => {
      if (state.currentPlaylistState === undefined) return;

      const currentTrackIndex = state.currentPlaylistState.findIndex(
        (track) => track.id === state.currentTrackState?.id
      );
      if (currentTrackIndex === -1 || currentTrackIndex <= 0) return;
      state.currentTrackState = state.currentPlaylistState[currentTrackIndex - 1];
      state.isPlayingState = true;
    },
    setNextTrack: (state) => {
      if (state.currentPlaylistState === undefined) return;

      const currentTrackIndex = state.currentPlaylistState.findIndex(
        (track) => track.id === state.currentTrackState?.id
      );

      if (currentTrackIndex === -1 || currentTrackIndex + 1 >= state.currentPlaylistState.length)
        return;

      state.currentTrackState = state.currentPlaylistState[currentTrackIndex + 1];
      state.isPlayingState = true;
    },
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlayingState = action.payload;
    },
    setShufflePlaylist: (state, action: PayloadAction<boolean>) => {
      if (state.initialPlaylistState === undefined) return;

      state.currentPlaylistState = !action.payload
        ? state.initialPlaylistState
        : state.initialPlaylistState.toSorted((a, b) => Math.random() - 0.5);

      state.isShuffleState = action.payload;
    },
    setDislikeTrack: (state, action: PayloadAction<number>) => {
      const trackID = action.payload;
      state.likedPlaylistState = state.likedPlaylistState.filter((track) => track.id !== trackID);

      if (state.currentPlaylistTypeState === "Favorites") {
        if (state.currentPlaylistState !== undefined) {
          state.currentPlaylistState = state.currentPlaylistState.filter(
            (track) => track.id !== trackID
          );
        }
        if (state.initialPlaylistState !== undefined) {
          state.initialPlaylistState = state.initialPlaylistState.filter(
            (track) => track.id !== trackID
          );
        }
      }
    },
    setLikeTrack: (state, action: PayloadAction<number>) => {
      if (state.currentPlaylistState === undefined) return;
      const trackID = action.payload;
      const track = state.currentPlaylistState.find((track) => track.id === trackID);
      if (!track) return;
      state.likedPlaylistState.push(track);
    },
    setLikedPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.likedPlaylistState = action.payload;
    },
    filterPlaylist: (
      state,
      action: PayloadAction<{ operation: "add" | "delete"; filter: FilterType }>
    ) => {
      if (action.payload.operation === "add") {
        state.filters[action.payload.filter.type] = action.payload.filter;
      } else {
        delete state.filters[action.payload.filter.type];
      }

      state.currentPlaylistState = state.initialPlaylistState?.filter((track) => {
        if (Object.values(state.filters).length <= 0) return true;

        let result = true;

        Object.values(state.filters).forEach((filter) => {
          if (!result) return;

          if (filter.type === "search") {
            return (result =
              track.name.toLowerCase().includes(filter.value.toLowerCase()) ||
              track.author.toLowerCase().includes(filter.value.toLowerCase()));
          }

          if (filter.type === "genre") {
            return (result = track.genre.includes(filter.value));
          }

          return (result = track[filter.type] === filter.value);
        });

        return result;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPlaylist.fulfilled, (state, action) => {
      state.initialPlaylistState = action.payload;
      state.currentPlaylistState = action.payload;
    });
    builder.addCase(getInitialPlaylist.rejected, (state, action) => {
      state.initialPlaylistState = [];
      state.currentPlaylistState = [];
      console.error(action.payload);
    });

    builder.addCase(getFavoriteTrack.fulfilled, (state, action) => {
      state.likedPlaylistState = action.payload;
    });
    builder.addCase(getFavoriteTrack.rejected, (state, action) => {
      console.error(action.payload);
    });
  },
});

export const {
  setPlaylistType,
  setTrack,
  setNextTrack,
  setPreviousTrack,
  setPlaying,
  setInitialPlaylist,
  setShufflePlaylist,
  setDislikeTrack,
  setLikeTrack,
  setLikedPlaylist,
  filterPlaylist,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;
