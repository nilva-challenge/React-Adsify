import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import styles from "./Card.module.scss";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";
import Theme from "../../store/ThemeProvider";
import Skeleton from "../Skeleton";

export interface ICardProps {
  imgUrl: string;
  title: string;
  onclickLink?: string;
  viewCount?: number;
  id?: number;
}

const Card = ({ imgUrl, title, onclickLink, viewCount, id }: ICardProps) => {
  const themeLight = useContext<string>(Theme);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState<boolean>(() => false);
  return (
    <div
      className={`${themeLight ? styles.Dark : styles.Light} ${
        styles.card__container
      }`}
    >
      {" "}
      <Link href={{ pathname: "/showBanner", query: { id: onclickLink } }}>
        <img
          width="300px"
          height="300px"
          src={imgUrl}
          className={styles.card__img}
          style={loaded ? {} : { display: "none" }}
          alt={id + 1}
          onClick={() => dispatch({ type: "addView", value: id })}
          onLoad={() => setLoaded(true)}
        />
      </Link>
      {!loaded && <Skeleton type="img" />}
      <span className={styles.card__title}>{title}</span>
      <div className={styles.card__info}>
        <span className={styles.info__id}>{`# ${id + 1}`}</span>
        <div className={styles.info__viewCount}>
          {themeLight ? <AiOutlineEye /> : <AiFillEye />}
          <span>{`${viewCount ? viewCount : 0}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
