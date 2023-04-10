import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
/* ROUTES setup */
import { BrowserRouter } from "react-router-dom";
/* recipe context */
import { RecipeContextProvider } from "./contexts/recipe.context";
import { RecipeIngredientsContextProvider } from "./contexts/ingredients.contex";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecipeContextProvider>
        <RecipeIngredientsContextProvider>
          <App />
        </RecipeIngredientsContextProvider>
      </RecipeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
