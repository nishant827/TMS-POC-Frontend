import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../Profile/actions/index";
function Header() {
  const user = useSelector((state) => state.loggedUser);

  const dispatch = useDispatch();

  const SignOut = () => {
    console.log("calling signout function");
    dispatch(signOut());
    localStorage.removeItem('token')
    console.log("header_page", user.isLogged);
  };
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1>
        <Link className="navbar-brand" to="/">
          5G TMC
        </Link>
      </h1>
      <ul className="nav">
        {user.isLogged ? (
          <Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/technision">
                Technician
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createtask">
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasklist">
                Sites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={SignOut} to="/login">
                SignOut
              </Link>
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
}
export default Header;
