import { getAllTracks } from "@/services/api";
import { useEffect, useState } from "react";

const useAllTracks = (): [Array<any> | null, boolean, boolean] => {
  const [tracks, setTracks] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllTracks = async () => {
      try {
        const data = await getAllTracks();
        setTracks(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTracks();
  }, []);

  return [tracks, loading, error];
};

export default useAllTracks;
