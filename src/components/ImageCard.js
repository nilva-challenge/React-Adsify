import {NavLink} from "react-router-dom";

export default function ImageCard(props){



    return(
        <NavLink to={"/detail"}>
        <div className="my-1 cursor-pointer">
            <img src={props.image} alt={props.alt} className="object-cover w-300 h-300 rounded-t"/>
            <div className="flex justify-center bg-gray-200 rounded-b"><h2 className="text-lg font-bold">{props.title}</h2></div>
        </div>
        </NavLink>
    );
}