import { createContext, useEffect, useState } from "react";

// export const todoContext = createContext(null);
export const recepiecontext = createContext(null);

const Wrapper = (props) => {
  // const [todos, setTodos] = useState([]);
  const [data, setData] = useState([
  {
    id: 1,
    chef: "Rohit Mehra",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    recipieName: "Cashew Delight Curry",
    ingredients: "Cashews, cream, onions, tomatoes, ginger, garlic, spices",
    detail: "Soak cashews, grind into paste, sauté onions and tomatoes, add spices and cashew paste, simmer until thick, garnish with coriander.",
    category: "lunch",
    time: 30
  },
  {
    id: 2,
    chef: "Meena Arora",
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    recipieName: "Paneer in Kaju-Badam Gravy",
    ingredients: "Paneer, cashews, almonds, cream, spices",
    detail: "Soak kaju and badam, make paste, sauté with spices, add paneer cubes, cook till creamy and rich.",
    category: "dinner",
    time: 40
  },
]
);
const [originalData,setOriginalData] = useState([])

  useEffect(()=>{
    const local = JSON.parse(localStorage.getItem("recipies"))|| []
    setData(local)
    setOriginalData(local)
  },[])
  return (
    <recepiecontext.Provider value={{ data, setData ,originalData}}>
      {props.children}
    </recepiecontext.Provider>
  );
};

export default Wrapper;

{
  /* <NavLink className ={{(e)=>e.isActive?"text-red":"text-green"}}></NavLink> */
}
