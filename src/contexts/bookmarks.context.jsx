import { createContext, useState } from "react";
export const RecipeBookmarksContext = createContext({ ingredients: [] });
export const RecipeBookmarksContextProvider = ({ children }) => {
  const [recipeBookmarks, setRecipeBookmarks] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  let value = {
    recipeBookmarks,
    setRecipeBookmarks,
    isBookmarked,
    setIsBookmarked,
  };
  return (
    <RecipeBookmarksContext.Provider value={value}>
      {children}
    </RecipeBookmarksContext.Provider>
  );
};
