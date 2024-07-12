import { fetchWithAuth } from "@/helpers/fetchWithAuth";
import { log } from "console";

const BASE_URL = "https://skypro-music-api.skyeng.tech/";
const BASE_USER_URL = "https://skypro-music-api.skyeng.tech/user";
const BASE_CATALOG_URL = "https://skypro-music-api.skyeng.tech/catalog";

export const getAllTracks = async () => {
  const response = await fetch(`${BASE_CATALOG_URL}/track/all/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export async function likeTrack({
  trackId,
  access,
  refresh,
}: {
  trackId: number;
  access: string;
  refresh: string;
}) {
  const res = await fetchWithAuth(
    BASE_URL + `/track/${trackId}/favorite/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
    refresh
  );
  return res.json();
}

export async function dislikeTrack({
  trackId,
  access,
  refresh,
}: {
  trackId: number;
  access: string;
  refresh: string;
}) {
  const res = await fetchWithAuth(
    BASE_URL + `/track/${trackId}/favorite/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
    refresh
  );
  return res.json();
}

export async function fetchFavoriteTracks({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) {
  const res = await fetchWithAuth(
    BASE_URL + `/track/favorite/all/`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
    refresh
  );

  return res.json();
}
