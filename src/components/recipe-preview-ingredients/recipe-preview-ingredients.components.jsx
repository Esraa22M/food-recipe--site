import "./recipe-preview-ingredients.styles.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { RecipeContext } from "../../contexts/recipe.context";
import { RecipeIngredientsContext } from "../../contexts/ingredients.contex";
import { useEffect } from "react";
import { Fraction } from "fractional";
export const RecipePreviewIngredients = ({ ingredients }) => {
  let { counterValue, currentRecipe } = useContext(RecipeContext);
  let { recipeIngredients, setRecipeIngredients } = useContext(
    RecipeIngredientsContext
  );

  useEffect(() => {
    let tempIngred = ingredients.map((item) =>
      item.quantity
        ? (item = {
            ...item,
            quantity: new Fraction(getQuantity(item)).toString() + " ",
          })
        : { ...item, quantity: "" }
    );
    setRecipeIngredients(tempIngred);
  }, [counterValue]);

  const getQuantity = (item) => {
    return (
      ((item.quantity / currentRecipe.value.servings) * counterValue).toFixed(
        2
      ) + " "
    );
  };
  return (
    <section className="recipe--preview__ingredients">
      <h2 className="recipe--preview__ingredients__header">
        RECIPE INGREDIENTS
      </h2>
      <ul className="recipe--preview__ingredients__container">
        {recipeIngredients.map((item, index) => (
          <li
            className="recipe--preview__ingredients__container__item"
            key={index + item.description}
          >
            <FontAwesomeIcon
              icon={faStar}
              className="recipe--preview__details__info__time__icon"
            />
            <span className="recipe--preview__ingredients__container__item__quantity">
              {item.quantity}
              {item.unit ? item.unit + " " : ""}
            </span>
            <span>{item.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
