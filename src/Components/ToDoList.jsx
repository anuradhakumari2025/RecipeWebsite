import { useContext } from "react";
// import { todoContext } from "../Wrapper";

const ToDoList = () => {
  const deleteHandler = (id) =>{
    const newTodo = todos.filter((todo)=>todo.id!== id)
    setTodos(newTodo)
  }
  const toggleComplete=(id)=>{
   const updatedTodos =  todos.map((todo)=>(
      todo.id === id ? {...todo,isCompleted:!todo.isCompleted} : todo
    ))
    setTodos(updatedTodos)
  }
const [todos,setTodos] = useContext(todoContext)

  return (
    <div className="todolist">
      {todos.map((todo) => (
        <div className="tasks" key={todo.id}>
          <div className="task">
            <input type="checkbox" className="check" checked={todo.isCompleted}  onChange={()=>toggleComplete(todo.id)} ></input>
            <h4
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.todo}
            </h4>
            <i className="ri-delete-bin-5-line deleteBtn" onClick={()=>deleteHandler(todo.id)}></i>
          </div>
          <div className="time">
            <h4>{todo.createdAt} AM</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
