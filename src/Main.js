import React from "react";

import "./Main.css";

import Player from "./Player.js";

const Main = (props) => {
  return (
    <main>
      <h4 className="main__title">
        {props.video ? "Explore Videos. Click to play!" : "Explore Photos. Click to view in full Size!"}
      </h4>
      <ul className="container">
        {props.children}
      </ul>
    </main>
  );
};

export default Main;
