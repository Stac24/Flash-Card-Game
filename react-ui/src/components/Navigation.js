import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu, show);
  };

  const show = menu ? "show" : "";

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-5 py-3">
      <a class="navbar-brand" href="/">
        <img src="./high-voltage.png" width="30" height="30" alt="" />
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleMenu}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        className={"collapse navbar-collapse " + show}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" exact>
              Home Page
            </Link>
          </li>
          <li className="nav-item">
            <Link to="create"> Create Flash Cards </Link>
          </li>
        </ul>
        <Link className="ms-auto" to="login">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
