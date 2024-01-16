import { useEffect, useState } from "react";
import apiClient from "../service/api-client";

interface Game {
  id: number;
  name: string;
}
interface Props {
  count: number;
  result: Game[];
}
const Game_Grid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Props>("/games")
      .then((res) => setGames(res.data.result))
      .catch((err) => setError(err.message));
  });
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default Game_Grid;
