import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardList } from "../features/cardList/cardListSlice";

import Card from "./Card";

const CardList = ({ ...props }) => {
  const dispatch = useDispatch();
  const dataList = useSelector((store) => store.cardList.data);
  const {transformX} = useSelector((store) => store.cardList);

  useEffect(() => {
    dispatch(cardList());
    console.log(dataList);
  }, []);

  return (
    <>
      <div className="px-2 py-2 carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${transformX}%)` }}
        >
          <div className="carousel-item">
            {dataList.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
