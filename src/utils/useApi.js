import axios from "axios";

export const baseRiotApi = axios.create({
  baseURL: "https://br1.api.riotgames.com",
  timeout: 10000,
  headers: {
    "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY,
  },
});

export const baseDataDragonApi = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com",
  timeout: 10000,
});

let cacheApi = null;

export const getDataDragonApi = async () => {
  try {
    if (cacheApi) return cacheApi;

    const { data } = await baseDataDragonApi.get("/api/versions.json");
    const lastVersion = data[0];

    cacheApi = axios.create({
      baseURL: `https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/pt_BR`,
      timeout: 10000,
    });

    return cacheApi;
  } catch (error) {
    console.error("Erro ao carregar dados vindo de Data Dragon", error);
    throw new Error("Não foi possível carregar os dados do League of Legends.");
  }
};
