// import { useContext } from "react";

import { createContext, useEffect, useState } from "react";

// export const todoContext = createContext(null);
export const recepiecontext = createContext(null);

const Wrapper = (props) => {
  // const [todos, setTodos] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      chef: "klsdjf",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      recipieName: "kaju",
      ingredients: "kismis",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
    },
    {
      id: 2,
      chef: "klsdjf",
      recipieName: "kaju badam paneer",
      ingredients: "kismis",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
      image:
        "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      chef: "klsdjf",
      image:
        "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      recipieName: "kaju",
      ingredients: "kismis",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
    },
    {
      id: 4,
      chef: "klsdjf",
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      recipieName: "kaju",
      ingredients: "kismis",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
    },
    {
      id: 5,
      chef: "klsdjf",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      recipieName: "kaju",
      ingredients: "kismis",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
    },
    {
      id: 6,
      chef: "klsdjf",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyfGVufDB8fDB8fHww",
      recipieName: "kaju",
      ingredients: "kismis",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
    },
    {
      id: 7,
      chef: "klsdjf",
      image:
        "https://media.istockphoto.com/id/1453999382/photo/jhangore-ki-kheer.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZKfcvqfbRZKAAtIaG8dacTEUdzjNJ7crRKgAUBCzyPo=",
      recipieName: "kheer",
      ingredients: "rice,milk,chini",
      detail:
        "qwertyuioplkjhgfdsszxcvbnm, hwi alsih ashoief ishoef lsihf sij slhfo lsieh  sefo i,",
        category:"dinner"
    },
  ]);

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("recipies"))|| [])
  },[])
  return (
    <recepiecontext.Provider value={{ data, setData }}>
      {props.children}
    </recepiecontext.Provider>
  );
};

export default Wrapper;

{
  /* <NavLink className ={{(e)=>e.isActive?"text-red":"text-green"}}></NavLink> */
}
