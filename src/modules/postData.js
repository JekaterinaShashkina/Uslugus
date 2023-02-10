import { CustomError } from "./CustomError";

export const postData = async (url, data, method = "post") => {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(data),
    });

    if (response.ok && response.status !== 404) {
      return await response.json();
    } else {
      throw new CustomError(await response.json());
    }
  } catch (e) {
    return e.data || e;
  }
};
