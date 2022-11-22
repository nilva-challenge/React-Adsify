import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import { counter } from "../features/tracker/trackerSlice";
import axios from "axios";

const CardDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  
  const url = `https://picsum.photos/id/${params.id}/info`;
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
    dispatch(counter());

    getApi()
      .then((data) => setInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center p-4">
      <h3>ID: {info.id}</h3>
      <Suspense fallback={<Loading />}>
        <h1 className="my-2 text-lg">Author: {info.author}</h1>
        <a href={info.download_url}><img src={info.download_url} alt="" /></a>
      </Suspense>
    </div>
  );
};

export default CardDetail;
