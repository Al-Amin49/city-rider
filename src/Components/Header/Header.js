import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../../App';
const Header=()=>{
const [loggedInUser, setLoggedInUser]= useContext(UserContext)
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <Link to="/home" className="navbar-brand ms-5 text-white fw-bold ">City Rider</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse  " id="navbarNav">
    <ul className="navbar-nav  ms-auto">
      <li className="nav-item active">
        <Link to="/home" className="nav-link text-white mx-3 ">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/destination" className="nav-link text-white mx-3" >Destination</Link>
      </li>
      <li className="nav-item">
      <Link to="/blog" className="nav-link text-white mx-3" >Blog</Link>
      </li>
      <li className="nav-item">
      <Link to="/" className="nav-link text-white mx-3" >Contact</Link>
      </li>
    </ul>
   {
     loggedInUser.email ?<p class="bg-success text-white mx-3 my-auto px-4 py-2 fw-bold rounded-pill">{loggedInUser.name}</p>:<button className="me-5 btn btn-success rounded-pill text-white py-2 px-4 fw-bold">Login</button>
}
  </div>
</nav>

  )
}
export default Header;