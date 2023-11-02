import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav nav__black">
      <div className="nav__content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix logo"
          className="nav__logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="profile"
          className="nav__avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
