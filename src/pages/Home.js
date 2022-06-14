import {useEffect, useState} from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";
import {CircularProgress} from "@mui/material"
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch} from "react-redux";
import {changeSidebarItem} from "../store/reducer";

export default function Home(){
    const [serverError,setServerError]=useState(false)
    const [imageList,setImageList]=useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page,setPage]=useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('https://picsum.photos/v2/list?page=1&limit=60')
            .then(function (response) {
                setImageList(response.data)
                setPage(page+1)
            })
            .catch(function (error) {
                setServerError(true)
            })
        dispatch(changeSidebarItem(1))
    },[]);


    const getMore = () => {
        console.log("hellpo")
        axios.get('https://picsum.photos/v2/list?page='+{page}+'&limit=60')
            .then(function (response) {
                let tempData=[...imageList]
                tempData=tempData+response.data
                setImageList([...tempData])
            })
        setPage(page+1)
        if(page===10){setHasMore(false)}
    };


    return (
      <div className="w-full h-full bg-white overflow-y-scroll rounded-br py-3">
          {
              serverError===true?<span>server is not response</span>:
              imageList.length===0? <div className="flex justify-center"><CircularProgress size={30}/></div> :
                  <InfiniteScroll className="h-auto flex flex-row flex-wrap justify-around pb-20"
                  dataLength={imageList.length}
                                                                       next={()=>getMore}
                                                                       hasMore={hasMore}
                                                                       loader={<div>hfghfgh</div>}
                                                                       endMessage={<p>the end</p>}>
                  {imageList.map((item, index) => <ImageCard image={item.download_url} alt={item.id} title={item.author}
                                                             key={index}/>)}
              </InfiniteScroll>

          }
      </div>
    );
}