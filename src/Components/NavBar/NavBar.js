import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import "../DarkMode/DarkMode.css";
import React, { useState, useEffect } from "react";

const showLinks = (e) => {
  e.preventDefault();
  const link = document.getElementById("linksNav");
  if (link.style.display === "flex") {
    link.style.display = "none";
  } else {
    link.style.display = "flex";
  }
};

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="containerNav">
      <Link className="btnNav" id="nameTag" to={"/"}>
        Tommy Boileau
      </Link>
      <div className="iconNav" onClick={showLinks}>
        <FaHamburger />
      </div>
      <div
        className="linksNav"
        id="linksNav"
        style={{ display: "none", justifyContent: "center" }}
      >
        <Link className="btnNav" to={"/"}>
          About Me
        </Link>

        <Link className="btnNav" to={"/projects"}>
          My work
        </Link>

        <Link className="btnNav" to={"/contact"}>
          Contact Me
        </Link>

        <Link className="btnNav" to={"/resume"}>
          Resume
        </Link>
      </div>
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  );
}
