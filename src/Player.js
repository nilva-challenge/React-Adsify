import React from "react";

import "./Player.css";

const Player = (props) => {
  return props.player ? (
    <section className="player">
      <a className="player__close" onClick={props.closePlayer} href="#"></a>
      <video className="player__video" src={props.videoLink} controls></video>
    </section>
  ) : null;
};

export default Player;
