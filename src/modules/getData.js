import { CustomError } from "./CustomError";

export const getData = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return await response.json();
    } else {
      throw new CustomError(await response.json());
    }
  } catch (e) {
    console.warn(e);
  }
};
