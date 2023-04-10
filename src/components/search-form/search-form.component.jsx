import InputField from "../input-field/input-field.component";
import Button from "../button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import "./search-form.styles.scss";
import { RecipeContext } from "../../contexts/recipe.context";

const SearchForm = () => {
  let { searchRecipe, getSearchQuery, getSearchResult } =
    useContext(RecipeContext);
  const onSearch = (e) => {
    let query = e.target.value.toLowerCase();
    getSearchQuery(query);
  };
  const handleGetSearchResults = async (e) => {
    e.preventDefault();
    await getSearchResult();
  };
  return (
    <form className="search--form">
      <InputField
        onChange={onSearch}
        type="text"
        value={searchRecipe.query}
        className="search--form__input"
        placeholder="search over recipes"
      ></InputField>
      <Button
        buttonType="search"
        className="btn"
        onClick={handleGetSearchResults}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span>Search</span>
      </Button>
    </form>
  );
};
export default SearchForm;
