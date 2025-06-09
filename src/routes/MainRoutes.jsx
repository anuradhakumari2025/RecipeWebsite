import { Route, Routes } from "react-router-dom";
import Recipies from "../pages/Recipies";
import Home from "../pages/Home";
import CreateRecipie from "../pages/CreateRecipie";
import RecipieDetail from "../Components/RecipieDetail";
import Favourite from "../pages/Favourite";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/recipies" element={<Recipies />} />
      <Route path="/recipies/details/:id" element={<RecipieDetail/>}/>
      <Route path="/create-recipie" element={<CreateRecipie />} />
    </Routes>
  );
};

export default MainRoutes;
