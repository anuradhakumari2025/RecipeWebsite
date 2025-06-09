import { Link } from "react-router-dom";

const RecipieCard = ({ recepie }) => {
  // console.log(recepie, "From card");
  const { id, recipieName, detail, image } = recepie;
  return (
    <Link to={`/recipies/details/${id}`} className="recipieCardLink">
      <div className="recipieCard">
        <div className="img">
          <img src={image} alt="" />
          <div className="heading">
            <h4>{recipieName}</h4>
          </div>
        </div>
        <p className="detail">
          {detail.slice(0, 50)}
          <span>...more</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipieCard;
