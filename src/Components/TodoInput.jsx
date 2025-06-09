import { useContext } from "react";
import { useForm } from "react-hook-form";
// import { todoContext } from "../Wrapper";

const TodoInput = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

const [todos,setTodos] = useContext(todoContext)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const newTodo = {
      id: Date.now(),
      todo:data.task,
      isCompleted: false,
      createdAt: time,
    };
    setTodos([...todos, newTodo]);
    reset()
  };
  return (
    <>
      <h1 className="title">To-do List</h1>
      <form onSubmit={handleSubmit(submitHandler)} className="form">
        <input
          className="input"
          type="text"
          placeholder="enter task to do"
          {...register("task",{required:"*Please add some task"})}
        />
        {errors?.task?.message && <small className="error">{errors?.task?.message}</small>}
        <button className="btn">Add Task</button>
      </form>
    </>
  );
};

export default TodoInput;
