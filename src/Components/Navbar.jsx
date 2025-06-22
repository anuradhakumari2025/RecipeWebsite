import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { recepiecontext } from "../context/Wrapper";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { data, setData,originalData } = useContext(recepiecontext);
  const [item, setItem] = useState("");
  const navigate = useNavigate();

  //Search Handler Function
  const searchHandler = () => {
    const filteredRecipe = originalData.filter((recipe) =>
      recipe?.recipieName.toLowerCase().includes(item.trim().toLowerCase())
    );
    // console.log(filteredRecipe)
    const finalRecipeList = filteredRecipe.length > 0 ? filteredRecipe : originalData;
    setData(finalRecipeList);
    navigate("/recipies");
  };

 
  return (
    <div className="nav">
      <h1>
        <i>Kitchen</i>
      </h1>

      <div className="links">
        <NavLink
          className={(e) => (e.isActive ? "active" : "notActive")}
          to={"/"}
        >
          <h5>Home</h5>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "active" : "notActive")}
          to={"/recipies"}
        >
          <h5> Recipes</h5>
        </NavLink>

        <NavLink
          className={(e) => (e.isActive ? "active" : "notActive")}
          to={"/create-recipie"}
        >
          <h5> Create</h5>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "active" : "notActive")}
          to={"/favourite"}
        >
          <h5>Favourite</h5>
        </NavLink>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="search"
          className="searchItem"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <i className="ri-search-line" onClick={searchHandler}></i>
      </div>
      <MobileMenu item={item} setItem={setItem} searchHandler={searchHandler} />
    </div>
  );
};

export default Navbar;
