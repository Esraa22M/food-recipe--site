import { Recipe } from "../recipe/recipe.component";
import { useContext } from "react";
import { RecipeContext } from "../../contexts/recipe.context";
import { useEffect } from "react";
import "./recipes-list.styles.scss";
import { Spinner } from "../spinner/spinner.components";
import { Pagination } from "../pagination/pagination.components";
const RecipesList = () => {
  let {
    getSearchResultsPerPage,
    searchRecipe,
    searchStatus,
    recipesPerPage,
    currentPage,
  } = useContext(RecipeContext);
  useEffect(() => {
    // Update the document title using the browser API
    getSearchResultsPerPage();
  }, [searchRecipe, currentPage]);
  return (
    <>
      <ul className="recipes--list">
        {searchStatus && !searchRecipe.isLoading ? (
          <h2 className="recipes--list__main-header">{searchStatus}</h2>
        ) : (
          <></>
        )}
        {!searchStatus && !searchRecipe.isLoading ? <Spinner></Spinner> : <></>}
        <>
          {recipesPerPage.map((recipe) => {
            return <Recipe recipe={recipe} key={recipe.id}></Recipe>;
          })}
        </>
        <> {recipesPerPage.length ? <Pagination></Pagination> : ""}</>
      </ul>
    </>
  );
};
export default RecipesList;
