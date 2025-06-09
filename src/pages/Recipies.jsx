import { useContext } from "react";
import { recepiecontext } from "../context/Wrapper";
import RecipieCard from "../Components/RecipieCard";

const Product = () => {
  const { data } = useContext(recepiecontext);
  // console.log(data);
  return (
    <div className="recipies">
      <h1>Latest Recipies</h1>
     <div className="recipieCards">
       {data?.map((recepie) => (
        <RecipieCard key={recepie.id} recepie={recepie} />
      ))}
     </div>
    </div>
  );
};

export default Product;
