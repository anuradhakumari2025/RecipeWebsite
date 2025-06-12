import { useContext } from "react";
import { recepiecontext } from "../context/Wrapper";
import RecipieCard from "../Components/RecipieCard";
import { useLocation } from "react-router-dom";

const Recipes = () => {
  const { data} = useContext(recepiecontext);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const filteredRecipes = category
    ? data.filter(
        (recipe) => recipe.category?.toLowerCase() === category.toLowerCase()
      )
    : data; // ← Show all if no category specified
  // console.log(data);
  // console.log(filteredRecipes)
  return (
    <div className="recipies">
      <h1>Latest Recipies</h1>
     <div className="recipieCards">
       {filteredRecipes?.map((recepie) => (
        <RecipieCard key={recepie.id} recepie={recepie} />
      ))}
     </div>
    </div>
  );
};

export default Recipes;
