import React, {FC, useState} from 'react';
import {ReactVideoPlay, VideoSourceType} from 'react-video-play';
import axios from "axios";
import {useLocation} from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment } from '../redux/counterSlice'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const VideoPlayer: FC = () => {

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

    let src = [
        {
            name: 'Test',
            default: true,
            source: [
                {
                    source: 'http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.mp4',
                    type: VideoSourceType.video_mp4
                }
            ]
        }
    ];

    return (
        <div className="h-full">
            <div className="container flex content-center justify-center bg-gray-200 rounded-lg shadow-lg h-3/5">
                <div className="container p-6" onClick={() => dispatch(increment())}>
                    <ReactVideoPlay poster={img} sources={src} autoplay={false} muted={false} />
                    <h4 className="text-center">{count}</h4>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;