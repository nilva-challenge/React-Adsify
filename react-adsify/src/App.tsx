import React, {useEffect, useState} from 'react';
import Dashboard from './components/Dashboard';
import ImageViewer from "./components/ImageViewer";
import VideoPlayer from "./components//VideoPlayer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    <Route path="/image">
                        <ImageViewer/>
                    </Route>
                    <Route path="/video">
                        <VideoPlayer/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
