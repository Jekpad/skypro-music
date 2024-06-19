import { log } from "console";

const BASE_USER_URL = "https://skypro-music-api.skyeng.tech/user";
const BASE_CATALOG_URL = "https://skypro-music-api.skyeng.tech/catalog";

export const getAllTracks = async () => {
  const response = await fetch(`${BASE_CATALOG_URL}/track/all/`);
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
