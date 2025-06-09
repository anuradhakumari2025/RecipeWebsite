
const Read = ({user}) => {
  
  return (
    <div>{user.map((elem,id)=>(
      <ul key={id}>
        <li>Name: {elem.name}</li>
        <li>Age: {elem.age}</li>
      </ul>
    ))}</div>
  )
}

export default Read