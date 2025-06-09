import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { recepiecontext } from "../context/Wrapper";

const Navbar = () => {
  const { data, setData } = useContext(recepiecontext);
  const [item, setItem] = useState("");
  const searchHandler = () => {
    const fileteredRecipie = data.filter(
      (recipie) => recipie?.recipieName.toLowerCase().includes(item.trim().toLowerCase())
    );
    setData(fileteredRecipie)
  };
  return (
    <div className="nav">
      <h1><i>Kitchen</i></h1>
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
          <h5> Recipies</h5>
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
          onChange={(e) => setItem(e.target.value)}
        />
        <i className="ri-search-line" onClick={searchHandler}></i>
      </div>
    </div>
  );
};

export default Navbar;
