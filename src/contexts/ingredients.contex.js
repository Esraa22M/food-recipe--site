import { createContext, useState } from "react";
export const RecipeIngredientsContext = createContext({ ingredients: [] });
export const RecipeIngredientsContextProvider = ({ children }) => {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  let value = { recipeIngredients, setRecipeIngredients };
  return (
    <RecipeIngredientsContext.Provider value={value}>
      {children}
    </RecipeIngredientsContext.Provider>
  );
};
