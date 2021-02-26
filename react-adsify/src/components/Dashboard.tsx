import DashboardList, {Media} from "./DashboardList";
import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import SideBar from "./SideBar";
import {useBottomScrollListener} from "react-bottom-scroll-listener";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom"


const Dashboard: FC = () => {

    const modes: Array<{ name: string; icon: string }> = [
        {name: 'Videos', icon: '/videos.svg'},
        {name: 'Photos', icon: '/photos.svg'}
    ]
    const litem: Array<Media> = []
    const [list, setList] = useState(litem)
    const [pageId, setPageId] = useState(1)
    const [state, setState] = useState("image")
    let history = useHistory()


    useEffect(() => {
        console.log(pageId)
        axios.get(`https://picsum.photos/v2/list?limit=60&page=${pageId}`)
            .then(response => {
                setList(response.data);
            })
            .catch(response => console.log("Connection to Picsum failed"));
        setPageId(pageId + 1);
    }, []);

    return (
        <div className="container h-full">
            <div className="lg:grid lg:grid-cols-10 md:grid md:grid-cols-12">
                <div className="md:col-span-3 lg:col-span-2 bg-purple-600 flex-col">
                    <div className="my-10">
                        <img className="rounded-full shadow-md mx-auto w-1/3" style={{maxWidth: "100px"}}
                             src="/nilva.png"/>
                        <h2 className="text-center text-white pt-2">Nilva</h2>
                    </div>
                    <div className="h-auto">
                        {modes.map((modes, id) => <SideBar name={modes.name}
                                                           icon={modes.icon} key={id} onClick={() => {
                                                               if (modes.name == "Photos") {
                                                                   setState("image");
                                                               }
                                                               else if (modes.name == "Videos") {
                                                                   setState("video");
                                                               }
                                                           }}/>)}
                    </div>
                </div>
                <div ref={useBottomScrollListener(() => {
                    setPageId(pageId + 1);
                    axios.get(`https://picsum.photos/v2/list?limit=60&page=${pageId}`)
                        .then(response => {
                            setList(list.concat(response.data));
                        })
                        .catch(response => console.log("Connection to Picsum failed"));
                })}
                     className="md:col-span-9 lg:col-span-8 bg-gray-200 h-screen max-h-screen overflow-y-auto">

                    <div className="container grid lg:grid-cols-4 md:grid-cols-3">
                        {list.map((item, id) => <DashboardList id={item!.id} author={item!.author}
                                                               download_url={item!.download_url} key={id}
                                                               onClick={() => {
                                                                   history.push(`/${state}?id=${item.id}`)
                                                               }}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
