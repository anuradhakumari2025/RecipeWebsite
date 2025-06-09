import { useState } from "react";
import Read from "./Components/Read";
import Create from "./Components/Create";
import TodoInput from "./Components/TodoInput";
import ToDoList from "./Components/ToDoList";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  const [calVal, setCalVal] = useState("");
 

  // const onButtonClick = (event) => console.log("Button clicked" + event);
  // const onButtonClick = (event) => console.log(event);
  // const onButtonClick = (buttonText) => console.log(buttonText);

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  // console.log(todos);

  return (
    <>
      {/* Day 1 of react
      <Create />
      <Read user={user} /> */}

      {/* to do app
      <div className="main">
        <TodoInput  />
        <ToDoList  />
      </div> */}
      
      <Navbar />
      <MainRoutes/>
    </>
  );
}

export default App;
// stwaraj
