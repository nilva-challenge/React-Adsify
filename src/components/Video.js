
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Lottie from 'react-lottie';
import animationData from '../assets/Lotii/9811-loading.json'
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/dashbord.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { incrementViewVideo } from "../actions/track";

export default function Video(props) {

    const numberTrack = useSelector(state => state.TrakVideos)
    const dispatch = useDispatch();

    const [loding, setLoding] = useState(true)
    const [data, setData] = useState([])
    const [i, setLoad] = useState(60)

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=0&limit=${i}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setLoding(false)
                console.log(json)
            })
            .catch((error) => {
                console.error(error);
                alert(error)
            });
    }, [i])
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    const loadImage = () => {
        scroll(700)
        setLoad(i + 60)
    }
    const getTrack = () => {
        if (numberTrack === 0)
            return (
                <div className="track">
                    <h6>No Views</h6>
                </div>
            )
        else
            return (
                <div className="track">
                    <h6>Number of Views</h6>
                    <div className="nums"><h6 >{numberTrack}</h6></div>
                </div>
            )
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (

        <div className="main container">
            {loding ? <div className="lottie"> <Lottie options={defaultOptions}
                height={100}
                width={300}
            /></div> :
                <div>
                    <div className="titre">
                        <div className="htitr"> <h6>list of videos</h6></div>
                        <div className="line"><hr /><hr /></div>
                        <div className="btn">
                            <ArrowBackIosIcon className="arrow" onClick={() => scroll(-700)} />
                            <ArrowForwardIosIcon className="arrow" onClick={() => loadImage()} />
                        </div>
                    </div>
                    <div className="photo" ref={ref}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <LazyLoad height="50%" offsetVertical={300}>
                                            <Link onClick={() => dispatch(incrementViewVideo())} to={{
                                                pathname: `/Video/${item.download_url}`,
                                            }}>
                                                <div className="imageBg" style={{
                                                    backgroundImage: `url(${item.download_url})`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat'
                                                }}>
                                                    <PlayCircleOutlineIcon className="icon" />

                                                </div>
                                            </Link>
                                        </LazyLoad>
                                        <LazyLoad height="5%" offsetVertical={300}>
                                            <div className="title"> <h6>{item.author}</h6></div>
                                        </LazyLoad>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        {getTrack()}
                    </div>
                </div>
            }
        </div>
    )
}
