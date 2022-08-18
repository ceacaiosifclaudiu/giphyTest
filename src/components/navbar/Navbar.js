import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ setView }) => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo" onClick={() => setView(false)}>
        <img
          src="https://giphy.com/static/img/about/stickers/logo-spin.gif"
          alt=""
        />
        <h1>GIPHY</h1>
      </NavLink>

      <nav className="navlist">
        <ul>
          <li className="gifs buttonWrapper">
            <NavLink
              to="gifs"
              className={({ isActive }) =>
                isActive ? "menuButtonHover" : "menuButton"
              }
              onClick={() => setView(true)}>
              <h2>Gifs</h2>
            </NavLink>
          </li>
          <li className="stickers buttonWrapper">
            <NavLink
              to="stickers"
              className={({ isActive }) =>
                isActive ? "menuButtonHover" : "menuButton"
              }
              onClick={() => setView(true)}>
              <h2>Stickers</h2>
            </NavLink>
          </li>
          <li className="reactions buttonWrapper">
            <NavLink
              to="reactions"
              className={({ isActive }) =>
                isActive ? "menuButtonHover" : "menuButton"
              }
              onClick={() => setView(true)}>
              <h2>Reactions</h2>
            </NavLink>
          </li>
          <li className="entertainment buttonWrapper">
            <NavLink
              to="entertainment"
              className={({ isActive }) =>
                isActive ? "menuButtonHover" : "menuButton"
              }
              onClick={() => setView(true)}>
              <h2>Entertainment</h2>
            </NavLink>
          </li>
          <li className="trending buttonWrapper">
            <NavLink
              to="trending"
              className={({ isActive }) =>
                isActive ? "menuButtonHover" : "menuButton"
              }
              onClick={() => setView(true)}>
              <h2>Trending</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
