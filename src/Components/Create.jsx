import React, { useState } from "react";

const Create = () => {
  const [username,setUsername] = useState("")
  const [age,setAge] = useState("")
  const submitHandeler = (e)=>{
    e.preventDefault()
    const data = {username,age}
    console.log(data)
  }
  return (
    <>
      <h1>Register User</h1>
      <form onSubmit={submitHandeler}>
        <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="number" placeholder="age" onChange={(e)=>setAge(e.target.value)}/>
        <button> Submit</button>
      </form>
    </>
  );
};

export default Create;
