"use client";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/types/tracks";
import { fetchFavoriteTracks, getAllTracks } from "@/services/api";

type TrackStateType = {
  initialPlaylistState: TrackType[];
  currentPlaylistState: TrackType[];
  likedPlaylistState: TrackType[];
  currentTrackState: TrackType | undefined;
  isPlayingState: boolean;
  isShuffleState: boolean;
};

export const getInitialPlaylist = createAsyncThunk(
  "playlist/getInitialPlaylist",
  async (_, { dispatch }) => {
    try {
      const data = await getAllTracks();
      const tracks = data.map((track: { _id: string; [key: string]: any }) => {
        const { _id, ...rest } = track;
        return { id: _id, ...rest };
      });
      dispatch(setInitialPlaylist(tracks));
    } catch (err) {
      console.log("Произошла ошибка при получении треков");
      dispatch(setInitialPlaylist([]));
    }
  }
);

export const getFavoriteTrack = createAsyncThunk(
  "playlist/getFavoriteTracks",
  async ({ accessToken, refreshToken }: any, { rejectWithValue }) => {
    try {
      const data = await fetchFavoriteTracks({ accessToken, refreshToken });

      const tracks = data.data.map((track: { _id: string; [key: string]: any }) => {
        const { _id, ...rest } = track;
        return { id: _id, ...rest };
      });
      return tracks;
    } catch (err) {
      rejectWithValue("Произошла ошибка при получении любимых треков");
    }
  }
);

const initialState: TrackStateType = {
  initialPlaylistState: [],
  currentPlaylistState: [],
  likedPlaylistState: [],
  currentTrackState: undefined,
  isPlayingState: false,
  isShuffleState: false,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<TrackType | undefined>) => {
      state.currentTrackState = action.payload;
    },
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.currentPlaylistState = action.payload;
      state.initialPlaylistState = action.payload;
    },
    setPreviousTrack: (state) => {
      const currentTrackIndex = state.currentPlaylistState.findIndex(
        (track) => track.id === state.currentTrackState?.id
      );
      if (currentTrackIndex === -1 || currentTrackIndex <= 0) return;
      state.currentTrackState = state.currentPlaylistState[currentTrackIndex - 1];
      state.isPlayingState = true;
    },
    setNextTrack: (state) => {
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
      state.currentPlaylistState = !action.payload
        ? state.initialPlaylistState
        : state.initialPlaylistState.toSorted((a, b) => Math.random() - 0.5);

      state.isShuffleState = action.payload;
    },
    setDislikeTrack: (state, action: PayloadAction<number>) => {
      const trackID = action.payload;
      // const track = state.currentPlaylistState.find((track) => track.id === trackID);
      // if (!track) return;
      state.likedPlaylistState = state.likedPlaylistState.filter((track) => track.id !== trackID);
    },
    setLikeTrack: (state, action: PayloadAction<number>) => {
      const trackID = action.payload;
      const track = state.currentPlaylistState.find((track) => track.id === trackID);
      if (!track) return;
      state.likedPlaylistState.push(track);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteTrack.fulfilled, (state, action) => {
      state.likedPlaylistState = action.payload;
      // Добавить логику отображения любимых треков в state.initialPlaylistState state.currentPlaylistState
    });
    builder.addCase(getFavoriteTrack.rejected, (state, action) => {
      console.log("Произошла ошибка при получении любимых треков");
    });
  },
});

export const {
  setTrack,
  setNextTrack,
  setPreviousTrack,
  setPlaying,
  setInitialPlaylist,
  setShufflePlaylist,
  setDislikeTrack,
  setLikeTrack,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;
