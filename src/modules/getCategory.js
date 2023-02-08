import { getData } from "./getData";
import { API_URL } from "./const";
import { store } from "./store";

export const getCategory = async () => {
  const data = await getData(`${API_URL}/api/category`);
  store.category = data;
};
