
import React from "react";
import { Player } from 'video-react';
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/dashbord.css';


export default function VideoDetail(props) {
    let { video } = useParams();
    let url = window.location.pathname
    let videoUrl = " http://www.clipstill.com/wp-content/uploads/000055_swan_thumb.mp4?_=1"
    return (
        <div className="video">
            <Player >
                <source src={videoUrl}/>
            </Player>
        </div>
    )
}
