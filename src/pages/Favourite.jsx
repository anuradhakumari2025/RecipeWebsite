import RecipieCard from "../Components/RecipieCard";

const Favourite = () => {
  const favourite = JSON.parse(localStorage.getItem("fav")) || [];
  return (
    <div>
      <div className="recipies">
        <h1>Favourite Recipes</h1>
        {favourite.length > 0 ? (
          <div className="recipieCards">
            {favourite?.map((recepie) => (
              <RecipieCard key={recepie.id} recepie={recepie} />
            ))}
          </div>
        ) : (
          <h1 className="noFav">No Any Favourite Recipe Found</h1>
        )}
      </div>
    </div>
  );
};

export default Favourite;
