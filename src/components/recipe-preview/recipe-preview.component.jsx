import { useContext } from "react";
import { RecipeContext } from "../../contexts/recipe.context";
import { RecipePreviewFigure } from "../recipe-preview-figure/recipe-preview-figure.components";
import { RecipePreviewDetails } from "../recipe-preview-details/recipe-preview-details.components";
import { RecipePreviewIngredients } from "../recipe-preview-ingredients/recipe-preview-ingredients.components";
import { CookingSteps } from "../cooking-steps/cooking-steps.components";
import "./recipe-preview.styles.scss";
export const RecipePreview = () => {
  let { currentRecipe } = useContext(RecipeContext);
  let {
    image,
    title,
    coookingTime,
    servings,
    ingredients,
    publisher,
    sourceUrl,
  } = currentRecipe;
  return (
    <div className="recipe-preview">
      {!currentRecipe ? (
        <h2 className="recipe-preview__main-header">
          search for your favourite recipe!!
        </h2>
      ) : (
        <>
          <RecipePreviewFigure image={image} title={title} />
          <RecipePreviewDetails currentRecipe={currentRecipe} />
          <RecipePreviewIngredients ingredients={ingredients} />
          <CookingSteps sourceUrl={sourceUrl} publisher={publisher} />
        </>
      )}
    </div>
  );
};
