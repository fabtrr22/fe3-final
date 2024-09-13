import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/dientes.png";
import { ContextGlobal } from "../global.context";
import { BiSun, BiMoon } from "react-icons/bi";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ContextGlobal).contextValue;
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="header">
      <nav>
        <Link to={"/"}>
          <img src={logo} />
        </Link>
        <ul>
          <li>
            <Link
              to={"/"}
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "active" : ""}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/favs"}
              onClick={() => handleLinkClick("/favs")}
              className={activeLink === "/favs" ? "active" : ""}
            >
              Favoritos
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              onClick={() => handleLinkClick("/contact")}
              className={activeLink === "/contact" ? "active" : ""}
            >
              Contactenos
            </Link>
          </li>
          <div className="mode-container">
            <input type="checkbox" id="check" onClick={toggleTheme} />
            <label htmlFor="check" className="button-mode">
              {theme === "light" ? (
                <BiMoon className="moon" />
              ) : (
                <BiSun className="sun" />
              )}
            </label>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
