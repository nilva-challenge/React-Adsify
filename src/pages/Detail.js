import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {changeDetailCounter, changeSidebarItem} from "../store/reducer";
import axios from "axios";

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
        <div className="bg-white w-full h-full">
           <source src="http://www.clipstill.com/wp-content/uploads/000055_swan_thumb.mp4" type="video/mp4" className="w-20 h-20"/>
            <div>count{detailCounter}</div>
        </div>
    );
}