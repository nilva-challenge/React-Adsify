import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {changeDetailCounter, changeSidebarItem} from "../store/reducer";
import axios from "axios";
import ReactPlayer from "react-player";

export default function Detail(){
    const detailCounter = useSelector((state: RootStateOrAny) => state.search.detailCounter);
    const [serverError,setServerError]=useState(false)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changeSidebarItem(2))
        dispatch(changeDetailCounter(detailCounter+1))
        axios.get("http://www.clipstill.com/wp-content/uploads/000055_swan_thumb.mp4?_=1").then(function (response) {

        }).catch(function (error) {
            setServerError(true)
        })
    },[])
    return(
        <div className="bg-white w-full h-full flex flex-col justify-center items-center">
           <ReactPlayer loop={true} controls={true} url={`http://www.clipstill.com/wp-content/uploads/000055_swan_thumb.mp4?_=1`}/>
            <div>count{detailCounter}</div>
        </div>
    );
}