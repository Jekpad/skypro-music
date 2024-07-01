"use client";

import { TrackType } from "@/types/tracks";
import { createContext, useContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

type CurrentTrackContextValue = {
  currentTrack: TrackType | null;
  setCurrentTrack: Dispatch<SetStateAction<TrackType | null>>;
};

export const CurrentTrackContext = createContext<CurrentTrackContextValue | undefined>(undefined);

type CurrentTrackContextProviderProps = {
  children: ReactNode;
};

export function CurrentTrackContextProvider({ children }: CurrentTrackContextProviderProps) {
  const [currentTrack, setCurrentTrack] = useState<TrackType | null>(null);
  return (
    <CurrentTrackContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </CurrentTrackContext.Provider>
  );
}

export const useCurrentTrack = () => {
  const context = useContext(CurrentTrackContext);
  if (context === undefined) {
    throw new Error("useCurrentTrack must be used within a CurrentTrackContextProvider");
  }
  return context;
};
