const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>your favourite food <br />make it good</h1>
      </div>
      <div className="highlights">
        <h1>Highlights</h1>
        <div className="categories">
          <div className="recipieCard">
            <div className="image"><img src="https://images.unsplash.com/photo-1569246294372-ed319c674f14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlbGljaW91cyUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" /></div>
            <p>Breakfast</p>
          </div>

          <div className="recipieCard">
            <div className="image"><img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHVuY2h8ZW58MHx8MHx8fDA%3D" alt="" /></div>
            <p>Lunch</p>
          </div>

          <div className="recipieCard">
            <div className="image"><img src="https://images.unsplash.com/photo-1595440432061-e6c25f9feaf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
            <p>Dinner</p>
          </div>

          <div className="recipieCard">
            <div className="image"><img src="https://images.unsplash.com/photo-1608835291093-394b0c943a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwcGVyfGVufDB8fDB8fHww" alt="" /></div>
            <p>Supper</p>
          </div>

          <div className="recipieCard">
            <div className="image"><img src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
            <p>Dessert</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home