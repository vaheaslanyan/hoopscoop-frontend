import React, { useContext } from "react";
import { NavLink } from "react-router-dom"; //special component imported for navigation links that also show active page links

import "./NavLinks.css";
import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <div className="nav-links">
      <div className="nav-link-each">
        <NavLink to="/" exact>
          All Courts
        </NavLink>
      </div>
      {auth.isLoggedIn && (
        <div className="nav-link-each">
          <NavLink to={`/${auth.userId}/places`}>My Courts</NavLink>
        </div>
      )}
      {auth.isLoggedIn && (
        <div className="nav-link-each">
          <NavLink to="/places/new">Add a Court</NavLink>
        </div>
      )}
      {!auth.isLoggedIn && (
        <div className="nav-link-each">
          <NavLink to="/auth">Login | Sign Up</NavLink>
        </div>
      )}
      {auth.isLoggedIn && (
        <div className="nav-link-each">
          <Button onClick={auth.logout}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
