import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./bookmarks-icon.styles.scss";
import { useContext, useEffect } from "react";
import { RecipeContext } from "../../contexts/recipe.context";
import { RecipeBookmarksContext } from "../../contexts/bookmarks.context";
export const BookmarksIcon = ({ recipe }) => {
  let { setRecipeBookmarks, recipeBookmarks, isBookmarked, setIsBookmarked } =
    useContext(RecipeBookmarksContext);
  let { currentRecipe } = useContext(RecipeContext);
  const handleBookmark = (e) => {
    let isBookmarked = recipeBookmarks.find(
      (bookmarkObj) => bookmarkObj.id === recipe.id
    );
    if (!isBookmarked) {
      let tempRecipeBookmarks = [...recipeBookmarks];
      tempRecipeBookmarks.push({ ...recipe });
      setRecipeBookmarks(tempRecipeBookmarks);
      setIsBookmarked(true);
    } else {
      console.log("here");
      let tempRecipeBookmarks = recipeBookmarks.filter(
        (bookmark) => bookmark.id !== recipe.id
      );
      setRecipeBookmarks(tempRecipeBookmarks);
      setIsBookmarked(true);
      setIsBookmarked(false);
    }
    // if (!currentRecipe.bookmarked) {
    //   let tempRecipeBookmarks = [...recipeBookmarks];
    //   setCurrentRecipe({ bookmarked: true, ...currentRecipe });
    //   tempRecipeBookmarks.push(currentRecipe);
    //   setRecipeBookmarks(tempRecipeBookmarks);
    // } else {
    //   let tempRecipeBookmarks = recipeBookmarks.filter(
    //     (bookmark) => bookmark.id !== currentRecipe.id
    //   );
    //   setRecipeBookmarks(tempRecipeBookmarks);
    //   setCurrentRecipe({ bookmarked: false, ...currentRecipe });
    // }
  };
  const checkIsBookmarked = () => {
    let isBookmarked = recipeBookmarks.find(
      (bookmarkObj) => bookmarkObj.id === recipe.id
    );
    if (isBookmarked) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  };
  useEffect(() => checkIsBookmarked(), [currentRecipe]);
  return (
    <div onClick={handleBookmark}>
      <FontAwesomeIcon
        icon={faBookmark}
        data-clicked={isBookmarked}
        className="recipe--preview__details__info__time__bookmark"
      />
    </div>
  );
};
