import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/dashbord.css';
import Video from './Video'
import Photo from './Photo'
import PhotoDetail from './PhotoDetail'
import VideoDetail from './VideoDetail'

export default function HomePage(props) {
    return (
        <Router>
            <div className="main">
                <nav className="nav">
                    <ul>
                        <NavLink to="/" id="lll"><li>photo</li></NavLink>
                        <NavLink to="/Video" id="lll"><li>Video</li></NavLink>
                    </ul>
                </nav>
                <div>
                    <Switch>
                        <Route exact path='/' component={Photo} />
                        <Route path='/Photo/:img' component={PhotoDetail} />
                        <Route path='/Video/:video' component={VideoDetail} />
                        <Route exact path='/Video' component={Video} />
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
