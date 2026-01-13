import axios from "axios";

export const baseDataDragonApi = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com",
  timeout: 10000,
});

export const lastVersion = async () => {
  try {
    const { data } = await baseDataDragonApi.get("/api/versions.json");
    return data[0];
  } catch (error) {
    console.error(error);
    throw new Error(
      "Nao foi possivel carregar as versões de League of Legends."
    );
  }
};

export const getDataApi = async (version) => {
  try {
    return axios.create({
      baseURL: `https://ddragon.leagueoflegends.com/cdn/${version}/data/pt_BR`,
      timeout: 10000,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Nao foi possivel carregar os dados do League of Legends.");
  }
};

export const getChampThumbnail = (url) => {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${url}`;
};

export const getImage = (version, url) => {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/${url}`;
};
