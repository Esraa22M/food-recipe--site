import RecipesList from "../../components/recipes-list/recipes-list.components";
import {RecipePreview} from "../../components/recipe-preview/recipe-preview.component";

import "./home.styles.scss";
const Home = () => {
  return (
    <div className="recipes--preview">
      <RecipesList />
      <RecipePreview/>
    </div>
  );
};
export default Home;
