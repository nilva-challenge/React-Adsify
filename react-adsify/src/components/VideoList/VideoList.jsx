import React from "react";
import { useVideoListQuery } from "../../features/cardList/videoListApi";
import Loading from "../Loading";
import VideoDetail from "./VideoDetail";

const VideoList = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useVideoListQuery();

  return (
    <div className="container mx-auto px-4">
      <div className="text-center my-8">
        <h1 className="text-2xl my-4 mx-36 bg-sky-600 rounded p-2 max-md:bg-white">
          VideoList
        </h1>
        {isLoading && <Loading />}
        {isFetching && <h2>...isFetcing</h2>}
        {isSuccess && (
          <div className="grid grid-cols-10 gap-y-4 max-lg:grid-cols-6 max-sm:grid-cols-3">
            {data.map((video) => {
              return (
                <VideoDetail
                  key={video.id}
                  url={video.download_url}
                  author={video.author}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoList;
