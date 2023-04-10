import { createContext, useState } from "react";
import { getRecipe } from "../utils";
import { BASE_URL, RECIPES_PER_PAGE } from "../config";
export const RecipeContext = createContext({
  currentRecipe: {},

  searchStatus: "",
  currentPage: "",
  searchRecipe: {
    query: "",
    isLoading: false,
    searchResults: [],
  },
  recipesPerPage: [],
  counterValue: 0,
  getSearchQuery: () => {},
  loadRecipe: () => {},
});
export const RecipeContextProvider = ({ children }) => {
  let [currentRecipe, setCurrentRecipe] = useState("");
  let [counterValue, setCounterValue] = useState(currentRecipe.servings);
  let [searchRecipe, setSearchRecipe] = useState({
    query: "",
    searchResults: [],
    isLoading: true,
  });
  let [recipesPerPage, setRecipesPerPage] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [searchStatus, setSearchStatus] = useState("");

  const getSearchQuery = async (inputQuery) => {
    setSearchRecipe({ ...searchRecipe, query: inputQuery });
  };
  /*--load recipe from forkify api-- */
  const loadRecipe = async (recipeId) => {
    try {
      const data = await getRecipe(`${BASE_URL}${recipeId}`);
      const { recipe } = data.data;
      let currentRecipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        coookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      };
      setCounterValue(recipe.servings);
      setCurrentRecipe(currentRecipe);
      window.scrollTo(0, 0);
    } catch (err) {
      throw err;
    }
  };
  const resetState = () => {
    setCurrentRecipe("");
    setSearchRecipe({ query: "", searchResults: [], isLoading: false });
    setCurrentPage(1);
  };
  const getSearchResult = async () => {
    try {
      resetState();
      const data = await getRecipe(`${BASE_URL}?search=${searchRecipe.query}`);
      let recipes = data?.data.recipes.map((recipe) => {
        return {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          image: recipe.image_url,
        };
      });
      if (recipes?.length) {
        setSearchRecipe({
          ...searchRecipe,
          query: "",
          searchResults: recipes,
          isLoading: true,
        });
        setSearchStatus("");
      } else throw new Error("Recipe not found !!");
    } catch (err) {
      setSearchStatus(err.message);
    }
  };
  const getSearchResultsPerPage = async () => {
    let start = (currentPage - 1) * RECIPES_PER_PAGE;
    let end = currentPage * RECIPES_PER_PAGE;
    let recipes = searchRecipe.searchResults.slice(start, end);
    setRecipesPerPage(recipes);
  };
  let value = {
    currentRecipe,
    setCurrentRecipe,
    searchRecipe,
    getSearchQuery,
    counterValue,
    setCounterValue,
    getSearchResult,
    loadRecipe,
    getSearchResultsPerPage,
    searchStatus,
    recipesPerPage,
    currentPage,
    setCurrentPage,
  };
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
