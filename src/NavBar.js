import React from "react";

import "./NavBar.css";

const Nav = (props) => {

  const handleMenu = () => {
    const btn = document.querySelector(".menu-btn"),
      nav = document.querySelector(".nav");

    btn.classList.toggle("menu-btn--active");
    nav.classList.toggle("nav--active");
  }

  return (
    <nav className="nav">
      <a onClick={handleMenu} className="menu-btn">
        <span className="menu-btn__hamburger"></span>
      </a>
      <div className="nav__user">
        <img className="nav__img" alt="sorry!" src={props.src} />
        <p className="nav__name">{props.name}</p>
      </div>

      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link nav__link--active" onClick={props.handleMode} href="#" data-video="0">Photos</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" onClick={props.handleMode} href="#" data-video="1">Videos</a>
        </li>
      </ul>
    </nav>
  );
};


export default Nav;
