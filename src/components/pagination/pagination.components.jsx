import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import "./pagination.styles.scss";
import { RECIPES_PER_PAGE } from "../../config";
import { RecipeContext } from "../../contexts/recipe.context";
export const Pagination = () => {
  let { currentPage, setCurrentPage, searchRecipe } = useContext(RecipeContext);
  let buttonValue;
  const numberOfPages = Math.ceil(
    searchRecipe.searchResults.length / RECIPES_PER_PAGE
  );
  const paginationButtonsHandler = (e) => {
    const button = e.target.closest(".pagination--container__button");
    if (!button) return;
    let pageNumberValue = +button.dataset.goto;
    setCurrentPage(pageNumberValue);
  };
  if (currentPage === 1 && currentPage < numberOfPages) {
    buttonValue = (
      <button
        className="pagination--container__button"
        data-goto={currentPage + 1}
      >
        <FontAwesomeIcon icon={faArrowRight} />
        <span className="pagination--container__button--prev">
          {currentPage + 1}
        </span>
      </button>
    );
  }
  if (currentPage === 1 && numberOfPages === 1) {
    buttonValue = "";
  }
  if (currentPage > 1 && currentPage < numberOfPages) {
    buttonValue = (
      <>
        <button
          className="pagination--container__button"
          data-goto={currentPage - 1}
        >
          <span className="pagination--container__button--prev">
            {currentPage - 1}
          </span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="pagination--container__button"
          data-goto={currentPage + 1}
        >
          <FontAwesomeIcon icon={faArrowRight} />
          <span className="pagination--container__button--next">
            {currentPage + 1}
          </span>
        </button>
      </>
    );
  }
  if (currentPage === numberOfPages && numberOfPages > 1)
    buttonValue = (
      <button
        className="pagination--container__button"
        data-goto={currentPage - 1}
      >
        <span className="pagination--container__button--prev">
          {currentPage - 1}
        </span>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    );
  return (
    <div className="pagination--container" onClick={paginationButtonsHandler}>
      {buttonValue}
    </div>
  );
};
