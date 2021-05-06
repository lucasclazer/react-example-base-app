import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const busca = async (url, setData) => {
  try {
    const resp = await api.get(url);
    resp.data && setData(resp.data);
  } catch (error) {
    setData([]);
    console.error("Error on search", error);
  }
};
