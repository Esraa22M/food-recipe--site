import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faPeopleGroup,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { RecipeContext } from "../../contexts/recipe.context";
import { useContext } from "react";
import { BookmarksIcon } from "../bookmarks-icon/bookmarks-icon.component";
import { RecipeIngredientsContext } from "../../contexts/ingredients.contex";
import React from "react";
import "./recipe-preview.details.styles.scss";
export const RecipePreviewDetails = ({ recipe }) => {
  let { coookingTime, id } = recipe;
  let { setCurrentRecipe, counterValue, setCounterValue, currentRecipe } =
    useContext(RecipeContext);

  React.useEffect(() => {
    let tempRecipe = { ...recipe };
    tempRecipe.servings = counterValue;
    setCurrentRecipe({ ...currentRecipe, value: tempRecipe });
  }, [counterValue]);
  let handleServingCounterClicked = (e) => {
    let button = e.target.closest(
      ".recipe--preview__details__info__time__icon"
    );
    if (!button) return;
    let counterValue = +button.dataset.goto;
    if (counterValue) setCounterValue(counterValue);
  };
  return (
    <div className="recipe--preview__details">
      <div className="recipe--preview__details__info">
        <div className="recipe--preview__details__info__time">
          <FontAwesomeIcon
            icon={faClockFour}
            className="recipe--preview__details__info__time__icon"
          />
          <p className="recipe--preview__details__info__time__cooking-time">
            <span>{coookingTime}</span>
            <span>minutes</span>
          </p>
        </div>
        <div className="recipe--preview__details__info__time">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="recipe--preview__details__info__time__icon"
          />
          <span className="recipe--preview__details__info__time__servings">
            {counterValue}
          </span>
          <div
            className="recipe--preview__details__info__time__counter"
            onClick={handleServingCounterClicked}
          >
            <FontAwesomeIcon
              icon={faMinusCircle}
              data-goto={counterValue - 1}
              className="recipe--preview__details__info__time__icon"
            />
            <FontAwesomeIcon
              icon={faPlusCircle}
              data-goto={counterValue + 1}
              className="recipe--preview__details__info__time__icon"
            />
          </div>
        </div>
        <BookmarksIcon recipe={recipe}></BookmarksIcon>
      </div>
    </div>
  );
};
