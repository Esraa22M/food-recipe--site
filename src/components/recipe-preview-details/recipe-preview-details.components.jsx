import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faPeopleGroup,
  faBookmark,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { RecipeContext } from "../../contexts/recipe.context";
import { useContext } from "react";
import React from "react";
import "./recipe-preview.details.styles.scss";
export const RecipePreviewDetails = ({ currentRecipe }) => {
  let { coookingTime } = currentRecipe;
  let { setCurrentRecipe, counterValue, setCounterValue } =
    useContext(RecipeContext);
  React.useEffect(() => {
    let tempRecipe = { ...currentRecipe };
    tempRecipe.servings = counterValue;
    setCurrentRecipe(tempRecipe);
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
        <div>
          <FontAwesomeIcon
            icon={faBookmark}
            className="recipe--preview__details__info__time__bookmark"
          />
        </div>
      </div>
    </div>
  );
};
