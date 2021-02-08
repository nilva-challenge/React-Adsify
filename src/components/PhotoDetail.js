
import React from "react";
import {useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/dashbord.css';


export default function PhotoDetail(props) {
    let { img } = useParams();
    let url = window.location.pathname
    let imgUrl = url.slice(7, url.length)
    return (
        <div className="img">
            <img src={imgUrl} alt="image"></img>
        </div>
    )
}
