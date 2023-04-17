import "./bookmarks.styles.scss";
import { useContext } from "react";
import { Recipe } from "../recipe/recipe.component";
import { RecipeBookmarksContext } from "../../contexts/bookmarks.context";
export const Bookmarks = () => {
  let { recipeBookmarks } = useContext(RecipeBookmarksContext);
  return (
    <div className="bookmarks">
      <ul className="bookmarks__list">
        {!recipeBookmarks.length ? (
          <div className="message">
            {" "}
            <p>No bookmarks addded yet !!</p>
          </div>
        ) : (
          recipeBookmarks.map((bookmark) => {
            return <Recipe key={bookmark.id} recipe={bookmark}></Recipe>;
          })
        )}
      </ul>
    </div>
  );
};
