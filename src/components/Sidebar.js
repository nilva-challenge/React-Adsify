import Headphone from "../pic/headphones.svg";
import Person from "../pic/person.jpg";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export default function Sidebar(props){
    const selectedItem = useSelector((state: RootStateOrAny) => state.search.sidebarItem);
    const selectedStyle="bg-gradient-to-r from-gray-400 to-transparent text-gray-300 flex flex-row pl-10 items-center";
    const unselectedStyle="text-gray-300 flex flex-row pl-10 items-center";

    return(
        <div className={props.showsidebar===false?"flex relative w-2/3 lg:flex lg:flex-col lg:w-56 h-full bottom-0 top-0 left-0 bg-sidebarBG rounded-l py-4 flex flex-col items-center":"hidden relative w-2/3 lg:flex lg:flex-col lg:w-56 h-full bottom-0 top-0 left-0 bg-sidebarBG rounded-l  py-4 flex flex-col items-center"}>
            <div className="my-6">
                   <img src={Person} alt="person" className="w-16 h-16 rounded-full mb-2"/>
                <span className="text-white">Bob Smith</span>
            </div>
            <ul className="space-y-8 w-full">
                <li><NavLink to="/" className={ selectedItem===1?selectedStyle:unselectedStyle}><img src={Headphone} alt="" className="w-4 h-4"/> <span className="ml-4">discover</span></NavLink></li>
                <li><NavLink to="/detail" className={selectedItem===2?selectedStyle:unselectedStyle}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg> <span className="ml-4">search</span></NavLink></li>
            </ul>
        </div>
    );
}