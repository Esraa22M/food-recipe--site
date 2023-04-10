import logo from "../../assets/logo.png";
/* styles */
import "./navigation.styles.scss";
import RecipesList from "../../components/recipes-list/recipes-list.components";
import { Outlet } from "react-router-dom";
/* external components */
import SearchForm from "../../components/search-form/search-form.component";
import { PrimaryNavigation } from "../../components/primary-navigation/primary-navigation.component";
const Navigation = () => {
  return (
   <div className="container">
      <header className="navigation--container__header">
        {/* navigation logo */}
        <img
          src={logo}
          className="navigation--container__header--logo"
          alt="site-logo"
        />
        <SearchForm />
        <PrimaryNavigation />
      </header>

<Outlet/>
     </div>
     
  );
};
export default Navigation;
