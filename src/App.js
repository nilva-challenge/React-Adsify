import React, { Component } from "react";
import ReactDOM from "react-dom";
// main style file
import "./style.css";

import Nav from "./NavBar.js"; // navigation bar 
import Head from "./Head.js"; // header
import Main from "./Main.js"; // list of items
import Player from "./Player.js"; // vidoe player component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: 0,
      player: 0,
      playerLink: "",
      videos: [],
      clicks: []
    }
    this.handleMode = this.handleMode.bind(this);
    this.showFull = this.showFull.bind(this);
    this.closePlayer = this.closePlayer.bind(this);
  }

  componentDidMount() {
    // intital api call for first list
    let url = "https://picsum.photos/v2/list/?limit=60";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(state => {
        let clicks = [];
        for(let i = 0; i < data.length; i++){
          clicks.push(0)
        }
        return { videos: data, clicks }
      }))
      .catch(err => console.log(err));

    // event listener for reaching the end of the page to retrieve new items
    window.addEventListener("scroll", (e) => {
      let sY = window.scrollY;
      let maxScroll = document.documentElement.offsetHeight - window.innerHeight;
      if(sY == maxScroll) {
        this.setState(state => {
          let videos = [...state.videos];
          let clicks = [...state.clicks]
          let url = "https://picsum.photos/v2/list/?limit=60";
          fetch(url)
            .then(response => response.json())
            .then(data => data.forEach(item => {
              videos.push(item);
              clicks.push(0);
            }))
            .catch(err => console.log(err));
          return {videos, clicks};
        });
      }
    });
  }

  // evenet listener for changing the mode of programm in navigation bar
  handleMode(e) {
    // set mode and clear state
    this.setState({ video: Number(e.target.dataset.video), videos: [], clicks: []});
    // add styles for active mode in navigation bar
    document.querySelector(".nav__link--active").classList.remove("nav__link--active");
    e.target.classList.add("nav__link--active");

    // request new photo and rende new items
    let url = "https://picsum.photos/v2/list/?limit=60";
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(state => {
        let clicks = [];
        for(let i = 0; i < data.length; i++){
          clicks.push(0)
        }
        return { videos: data, clicks }
      }))
      .catch(err => console.log(err));

  }

  // event listener to open video/banner in full page size
  showFull(e) {
    if (this.state.video){
      this.setState({ player: 1 });

      // trace clicks in photo mode
      this.setState(state => {
        let clicks = [...state.clicks];
        clicks[Number(e.target.dataset.num)] += 1;
        return { clicks };
      });

    }else {
      // show phot in full page size
      e.target.parentNode.classList.toggle("item--open");
      let open = e.target.parentNode.classList.contains("item--open");
      e.target.textContent = open ? "Close" : "View";

      // trace clicks in photo mode
      if(open) {
        this.setState(state => {
          let clicks = [...state.clicks];
          clicks[Number(e.target.dataset.num)] += 1;
          return { clicks };
        });
      };
    };
  }

  // event listener for closing video player
  closePlayer() {
    if (this.state.player) {
      this.setState({ player: 0 });
    }
  }

  render() {
    // creating list items to pass them as children to Main component
    const list = this.state.videos.map((item, index) => {
      return (
      <li key={index} className="item">
        <img className="item__img" src={item.download_url} alt="sorry!" />
        <div className="item__text">
          <h5 className="item__title">{item.author}</h5>
          <p className="item__count">{this.state.clicks[index]}</p>
        </div>
        <button data-num={index} className="item__open" onClick={this.showFull}>View</button>
      </li>
    );
    });

    return (
      <section>
        <Nav 
          handleMode={this.handleMode}
          name="Lorem Ipsum"
          src="https://picsum.photos/300"/>
        <Head />

        <Main
          children = {list}
          video={this.state.video} 
          showFull={this.showFull}/>
        <Player videoLink={this.state.videoLink} closePlayer={this.closePlayer} player={this.state.player}/> 

      </section>
    );
  }
};

export default App;
