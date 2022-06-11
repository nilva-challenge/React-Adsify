export default function Sidebar(){
    return(
        <div className={`w-56 h-full bottom-0 top-0 left-0 bg-sidebarBG rounded-l px-2 py-4 flex flex-col items-center`}>
            <div className="h-28">
                avatar
            </div>
            <ul className="space-y-8">
                <li className={`text-gray-300`}> discover</li>
                <li className={`text-gray-300`}>search</li>
                <li className={`text-gray-300`}>favourites</li>
                <li className={`text-gray-300`}>playlist</li>
            </ul>
        </div>
    );
}