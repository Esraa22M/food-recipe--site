import { TIME_OUT_VALUE } from "./config";
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long!"));
    }, s * 1000);
  });
};
export const getRecipe = async (url) => {
  try {
    const fetchUrl = fetch(url);
    const recipeResponse = await Promise.race([
      fetchUrl,
      timeout(TIME_OUT_VALUE),
    ]);
    if (!recipeResponse.ok) {
      throw new Error(`request takes too long time`);
    }
    return await recipeResponse.json();
  } catch (err) {
    throw err;
  }
};
