import { fetchWithAuth } from "@/helpers/fetchWithAuth";
import { log } from "console";

const BASE_URL = "https://webdev-music-003b5b991590.herokuapp.com/";
const BASE_USER_URL = "https://webdev-music-003b5b991590.herokuapp.com/user";
const BASE_CATALOG_URL = "https://webdev-music-003b5b991590.herokuapp.com/catalog";

export const registration = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${BASE_USER_URL}/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }

  const data = await response.json();
  return data;
};

export const getAllTracks = async () => {
  const response = await fetch(`${BASE_CATALOG_URL}/track/all/`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data.data;
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
