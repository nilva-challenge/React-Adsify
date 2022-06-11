import Headphone from "../pic/headphones.svg";
import Person from "../pic/person.jpg";
import Close from "../pic/close.svg";

export default function Sidebar(props){

    return(
        <div className={`relative ${props.showing} w-screen absolute z-50 lg:flex lg:flex-col lg:w-56 h-full bottom-0 top-0 left-0 bg-sidebarBG rounded-l px-2 py-4 flex flex-col items-center`}>
            <img src={Close} alt="" onClick={props.active} className="absolute top-2 right-2 flex lg:hidden w-8 h-8"/>
            <div className="my-6 ">
                   <img src={Person} alt="person" className="w-16 h-16 rounded-full mb-2"/>
                <span className="text-white">Bob Smith</span>
            </div>
            <ul className="space-y-8">
                <li className={`text-gray-300 flex flex-row`}><img src={Headphone} alt="" className="w-4 h-4"/> <span className="ml-4">discover</span></li>
                <li className={`text-gray-300 flex flex-row`}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg> <span className="ml-4">search</span></li>
                <li className={`text-gray-300 flex flex-row`}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg> <span className="ml-4">favourites</span></li>
                <li className={`text-gray-300 flex flex-row`}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg> <span className="ml-4">playlist</span></li>
            </ul>
        </div>
    );
}