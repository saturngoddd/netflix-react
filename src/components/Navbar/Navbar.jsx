import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showNavBg = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavBg);
    return () => {
      window.removeEventListener("scroll", showNavBg);
    };
  }, []);
  return (
    <nav className={`nav ${visible && "nav__black"}`}>
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
