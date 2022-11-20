import React, { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cardDetail } from "../features/cardDetail/cardDetailSlice";
import Loading from "../components/Loading";

const CardDetail = () => {
  const params = useParams();
  const { info } = useSelector((store) => store.cardDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardDetail(params.id));
  }, []);

  return (
    <div>
      CardDetail : {params.id}
      <Suspense fallback={<Loading />}>
        <h1>{info.author}</h1>
        <img src={info.download_url} alt="" />
      </Suspense>
    </div>
  );
};

export default CardDetail;
