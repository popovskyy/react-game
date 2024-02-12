import useData from "./useData.ts";

export interface Game {
  metacritic: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGames = () => useData<Game>("/games");

export default useGames;
