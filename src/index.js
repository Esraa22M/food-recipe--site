import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
/* ROUTES setup */
import { BrowserRouter } from "react-router-dom";
/* recipe context */
import { RecipeContextProvider } from "./contexts/recipe.context";
import { RecipeIngredientsContextProvider } from "./contexts/ingredients.contex";
import { RecipeBookmarksContextProvider } from "./contexts/bookmarks.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeIngredientsContextProvider>
        <RecipeContextProvider>
          <RecipeBookmarksContextProvider>
            <App />
          </RecipeBookmarksContextProvider>
        </RecipeContextProvider>
      </RecipeIngredientsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
