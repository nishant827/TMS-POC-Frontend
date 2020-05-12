import React from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {signOut} from '../../Profile/actions/index';
function Header() {
  const isLogged=useSelector(state=>state.loggedUser);
  const dispatch=useDispatch();
  
  const SignOut=()=>{
    console.log("calling signout function");
    dispatch(signOut());
    console.log("header_page",isLogged);
  }
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1>
        <Link className="navbar-brand" to="/">
          POC
        </Link>
      </h1>
      <ul className="nav">
        <li className="nav-item">
          {isLogged? <h2></h2>: <Link className="nav-link" to="/signup">
            Register
          </Link>}
         
        </li>
        <li className="nav-item">
          {!isLogged? <Link className="nav-link" to="/login">
            Login
          </Link>: <Link className="nav-link" onClick={SignOut} to="/logout">
            Logout
          </Link>}
       
        </li>
      </ul>
    </nav>
  );
}
export default Header;