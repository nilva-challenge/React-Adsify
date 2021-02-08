import React, { useContext } from "react";
import Card from "../Card";
import styles from "./ShowCards.module.scss";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton";
import { IStateProps } from "../MainPage";

const ShowCards = (props: { type?: string | undefined }) => {
  const type: string = props ? props.type : "";
  const {
    startId,
    numberOfCards,
    picList,
    numberOfPages,
  } = useSelector<IStateProps>((state) => state);
  let showCards: IStateProps["picList"] = picList[0]
    ? picList.slice(startId, startId + numberOfCards)
    : "";
  let temp: number[] = Array(numberOfCards).fill(7);
  return (
    <div className={styles.pics__container}>
      {type === "skeleton" &&
        temp.map((item, index: number) => <Skeleton key={index} type="card" />)}
      {!type &&
        !showCards &&
        temp.map((item, index: number) => <Skeleton key={index} type="card" />)}
      {!type &&
        showCards &&
        showCards.map((item) => (
          <Card
            key={item.selfId}
            imgUrl={item.download_url}
            title={item.author}
            id={item.selfId}
            onclickLink={item.id}
            viewCount={item.view_count}
          />
        ))}
    </div>
  );
};

export default ShowCards;
