import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({item,setItem,searchHandler}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mobile-menu">
      {!showMenu && <i onClick={()=>setShowMenu(true)} className="ri-menu-fill"></i>}
      {showMenu && (
        <>
          <i onClick={()=>setShowMenu(false)} className="ri-close-large-line"></i>
          <div className="menuOptions">
            <div className="mobileLinks">
              <NavLink
                className={(e) => (e.isActive ? "active" : "notActive")}
                to={"/"}
                onClick={()=>setShowMenu(false)}
              >
                <h5>Home</h5>
              </NavLink>
              <NavLink
                className={(e) => (e.isActive ? "active" : "notActive")}
                to={"/recipies"}
                onClick={()=>setShowMenu(false)}
              >
                <h5> Recipes</h5>
              </NavLink>

              <NavLink
                className={(e) => (e.isActive ? "active" : "notActive")}
                to={"/create-recipie"}
                onClick={()=>setShowMenu(false)}
              >
                <h5> Create</h5>
              </NavLink>
              <NavLink
                className={(e) => (e.isActive ? "active" : "notActive")}
                to={"/favourite"}
                onClick={()=>setShowMenu(false)}
              >
                <h5>Favourite</h5>
              </NavLink>
              <div className="mobileSearch">
                <input
                  type="text"
                  placeholder="search"
                  className="searchItem"
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
                <i className="ri-search-line" onClick={searchHandler}></i>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
