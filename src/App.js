import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import RecipesList from "./components/recipes-list/recipes-list.components";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation></Navigation>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="recipes" element={<RecipesList></RecipesList>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
