import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

interface Game {
    id: number;
    name: string;
  }
  interface Props {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<Props>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => setError(err.message));
    });

    return {games, error};
}

export default useGames
