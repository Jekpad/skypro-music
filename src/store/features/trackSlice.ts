import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/types/tracks";
import { act } from "react";

type TrackStateType = {
  initialPlaylistState: TrackType[];
  currentPlaylistState: TrackType[];
  currentTrackState: TrackType | undefined;
  isPlayingState: boolean;
  isShuffleState: boolean;
};

const initialState: TrackStateType = {
  initialPlaylistState: [],
  currentPlaylistState: [],
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
  },
});

export const {
  setTrack,
  setNextTrack,
  setPreviousTrack,
  setPlaying,
  setInitialPlaylist,
  setShufflePlaylist,
} = trackSlice.actions;
export const trackReducer = trackSlice.reducer;
