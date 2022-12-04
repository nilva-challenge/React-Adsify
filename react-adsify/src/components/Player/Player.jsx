import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import {
  ForwardPlayer,
  BackwardPlayer,
  PlayPlayer,
  ClosePlayer,
  PausePlayer,
} from "./PlayerControllers";
import Loading from "../Loading";

const Player = () => {
  const { idPlayer, playStatus } = useSelector((store) => store.player);
  const url = `https://picsum.photos/id/${idPlayer}/info`;
  const [info, setInfo] = useState({});

  const getApi = async () => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi()
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }, [idPlayer]);

  return (
    <div>
      <div className="grid grid-cols-12 bg-gray-200 bg-opacity-30">
        <Suspense fallback={<Loading />}>
          <div className="col-span-4 m-2">
            <img
              className="h-14 w-14 rounded m-2"
              src={info.download_url}
              alt="player banner"
            />
            <h4>{info.author}</h4>
          </div>
        </Suspense>
        <div className="control-buttons my-4 text-center col-span-7 absolute left-40">
          {BackwardPlayer()}
          {playStatus ? PlayPlayer() : PausePlayer()}
          {ForwardPlayer()}
        </div>
        <hr className="w-80 mt-14 border-2" />
        <div className="absolute right-0">{ClosePlayer()}</div>
      </div>
    </div>
  );
};

export default Player;
