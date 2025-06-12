import { useForm } from "react-hook-form";
import { recepiecontext } from "../context/Wrapper";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const { data, setData } = useContext(recepiecontext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (recepie) => {
    recepie.id = Date.now();
    const copyData = [...data];
    copyData.push(recepie);
    setData(copyData);
    localStorage.setItem("recipies", JSON.stringify(copyData));
    reset();
    navigate("/recipies");
  };
  return (
    <div className="createRecipie">
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Create Recipie</h3>
        <div className="image">
          <p>image url:-</p>

          <input
            {...register("image", {
              required: "*Please upload recipe image",
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
              required: "*Please add recipe name",
            })}
            type="text"
            placeholder="Recipe Name"
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
              required: "*Please add recipe details",
            })}
            placeholder="Recipe detail"
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
              required: "*Please add recipe ingredients",
            })}
            type="text"
            placeholder="Recipe Ingredients"
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
            <option value="dessert">Dessert</option>
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
          <p>Chef name:-</p>
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

        <button className="addBtn">Add Recipie</button>
      </form>
    </div>
  );
};

export default Service;
