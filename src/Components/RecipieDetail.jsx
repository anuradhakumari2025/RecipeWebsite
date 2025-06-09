import { useContext, useState } from "react";
import { recepiecontext } from "../context/Wrapper";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const RecipieDetail = () => {
  const { data, setData } = useContext(recepiecontext);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  const [isFav, setIsFav] = useState(false);
  // console.log(data);
  const navigate = useNavigate();
  const recipie = data.find((r) => r.id == id);
  // const recipie = data[recipieIdx];
  // console.log("recepie daetail ", recipie);

  const deleteHandler = () => {
    const fileteredRecipie = data.filter((rec) => rec.id != id);
    // console.log(fileteredRecipie,"fileter")
    setData(fileteredRecipie);
    navigate("/recipies");
  };
  const updateHandler = () => {
    setShowForm((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      recipieName: recipie?.recipieName,
      ingredients: recipie?.ingredients,
      detail: recipie?.detail,
      image: recipie?.image,
      chef: recipie?.chef,
      time: recipie?.time,
      category: recipie?.category,
    },
  });

  //Update recipie
  const submitHandler = (recipie) => {
    // console.log(recipie)
    const idx = data.findIndex((rec) => rec.id == id);
    // console.log(idx)
    let copyData = [...data];
    copyData[idx] = { ...copyData[idx], ...recipie };
    setData(copyData);
    localStorage.setItem("recipies", JSON.stringify(copyData));
    setShowForm(false);
  };

  // 1. Get current favs from localStorage
  const existingFavs = JSON.parse(localStorage.getItem("fav")) || [];


//   let existingFavs;
// try {
//   const data = localStorage.getItem("fav");
//   existingFavs = Array.isArray(JSON.parse(data)) ? JSON.parse(data) : [];
// } catch (e) {
//   existingFavs = [];
// }


  const FavHandler = () => {
    existingFavs.push(recipie)
    localStorage.setItem("fav", JSON.stringify(existingFavs));
  };
  const unFavHandler = () => {};
//   console.log(existingFavs.find(f => f.id == recipie?.id))
//   console.log("existingFavs:", existingFavs);
// console.log("Type of existingFavs:", typeof existingFavs);
// console.log("Is Array?", Array.isArray(existingFavs));

  return recipie ? (
    <div className="recipieDetail">
      <div className="up">
        <div className="image">
          <img src={recipie?.image} alt="" />
        </div>
        <div className="about">
          {existingFavs?.find(f => f.id == recipie?.id) ? (
            <i onClick={unFavHandler} className="ri-heart-fill"></i>
          ) : (
            <i onClick={FavHandler} className="ri-heart-line"></i>
          )}
          <h1>{recipie?.recipieName}</h1>
          <p>
            Recipie by <span>{recipie?.chef}</span>
          </p>
          <p>
            <span>Total:</span> {recipie?.time} min
          </p>
          <p>
            <span>Category: </span> {recipie?.category}{" "}
          </p>
          <div className="buttons">
            <button className="update" onClick={updateHandler}>
              Edit
            </button>
            <button className="delete" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="ingredient">
          <h1>Ingredients</h1>
          <ul>
            {recipie?.ingredients?.split(",").map((step, index) => (
              <li key={index}>
                <span>{step.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="detail">
          <h1>Directions</h1>
          <ul>
            {recipie?.detail?.split(",").map((step, index) => (
              <li key={index}>
                <span>{step.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showForm && (
        <div className="showForm">
          <form onSubmit={handleSubmit(submitHandler)}>
            <h3>Update Recipie</h3>

            {/* Image input field */}
            <div className="image">
              <p>image url:-</p>
              <input
                {...register("image", {
                  required: "*Please upload recipie image",
                })}
                type="url"
                placeholder="Upload Image"
              />
              {errors?.image?.message && (
                <small className="error">{errors.image.message}</small>
              )}
            </div>

            {/* Recipie Name Input field */}
            <div className="recipieName">
              <p>Name:-</p>
              <input
                {...register("recipieName", {
                  required: "*Please add recipie name",
                })}
                type="text"
                placeholder="Recipie Name"
              />
              {errors?.recipieName?.message && (
                <small className="error">{errors.recipieName.message}</small>
              )}
            </div>

            {/* Recipie Detail textarea field */}
            <div className="detail">
              <p>detail:-</p>
              <textarea
                {...register("detail", {
                  required: "*Please add recipie details",
                })}
                placeholder="Recipie detail"
                rows={5}
              ></textarea>
              {errors?.detail?.message && (
                <small className="error">{errors.detail.message}</small>
              )}
            </div>
            {/* Recipie Ingredients input field */}
            <div className="ingredients">
              <p>Ingredients:-</p>
              <input
                {...register("ingredients", {
                  required: "*Please add recipie ingredients",
                })}
                type="text"
                placeholder="Recipie Ingredients"
              />
              {errors?.ingredients?.message && (
                <small className="error">{errors.ingredients.message}</small>
              )}
            </div>

            {/* Category option field */}
            <div className="category">
              <p>Category:-</p>
              <select
                {...register("category", {
                  required: "Please select a category",
                })}
              >
                <option value="">Select Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="supper">Supper</option>
                <option value="dinner">Dinner</option>
              </select>
              {errors?.category?.message && (
                <small className="error">{errors.category.message}</small>
              )}
            </div>

            {/* Time input field */}
            <div className="time">
              <p>Time taken:-</p>
              <input
                {...register("time", {
                  required: "*Please add time taken to cook",
                })}
                type="number"
                placeholder="Time taken in minutes"
              />
              {errors?.time?.message && (
                <small className="error">{errors.time.message}</small>
              )}
            </div>

            {/* Chef input field */}
            <div className="chef">
              <p>Chef</p>
              <input
                {...register("chef", {
                  required: "*Please add chef name",
                })}
                type="text"
                placeholder="Chef Name"
              />
              {errors?.chef?.message && (
                <small className="error">{errors.chef.message}</small>
              )}
            </div>

            <button className="addBtn">Update Recipie</button>
          </form>
        </div>
      )}
    </div>
  ) : (
    "Loading..."
  );
};

export default RecipieDetail;
