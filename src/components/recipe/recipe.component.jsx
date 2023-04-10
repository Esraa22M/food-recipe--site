import "./recipe.styles.scss";
import { useContext } from "react";
import { RecipeContext } from "../../contexts/recipe.context";

export const Recipe = ({ recipe }) => {
  let { loadRecipe, currentRecipe } = useContext(RecipeContext);
  const handleRecipeLoading = () => loadRecipe(recipe.id);
  return (
    <li className="recipes--list__recipe" onClick={handleRecipeLoading}>
      <div
        className={`recipes--list__recipe__container ${
          recipe.id === currentRecipe.id ? "active" : ""
        }`}
      >
        <figure className="recipes--list__recipe__fig">
          <img src={recipe.image} alt={recipe.title} loading="lazy" />
        </figure>
        <div className="recipes--list__recipe__info" title={recipe.title}>
          <h4 className="recipes--list__recipe__info--header">
            {recipe.title}
          </h4>
          <p className="recipes--list__recipe__info--publisher">
            {recipe.publisher}
          </p>
        </div>
      </div>
    </li>
  );
};
