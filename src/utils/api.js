import axios from "axios";

export const baseDataDragonApi = axios.create({
  baseURL: "https://ddragon.leagueoflegends.com",
  timeout: 10000,
});

export const getApi = async () => {
  try {
    const { data } = await baseDataDragonApi.get("/api/versions.json");
    const lastVersion = data[0];
    console.log(lastVersion); 

    return axios.create({
      baseURL: `https://ddragon.leagueoflegends.com/cdn/${lastVersion}/data/pt_BR`,
      timeout: 10000,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Nao foi possivel carregar os dados do League of Legends.");
  }
};