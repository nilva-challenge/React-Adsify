import React, {FC, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams, useLocation
} from "react-router-dom";
import axios from "axios";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment } from '../redux/counterSlice'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ImageViewer: FC = () => {
    const params = useQuery()
    const id = params.get("id")
    const [img, setImg] = useState("")
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    axios.get(`https://picsum.photos/id/${id}/info`)
        .then(response => {
            setImg(response.data.download_url);
        })
        .catch(response => console.log("Connection to Picsum failed"));

    return (
        <div className="flex justify-center pt-24">
            <div className="container bg-gray-200 rounded-lg shadow-lg w-2/6">
                <img className="rounded-lg" src={img} onClick={() => dispatch(increment())}/>
                <h4 className="text-center">{count}</h4>
            </div>
        </div>
    );
}

export default ImageViewer;