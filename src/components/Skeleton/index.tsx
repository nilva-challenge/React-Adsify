import React from "react";
import Shimmer from "../Shimmer";
import styles from "./Skeleton.module.scss";

const Skeleton = (props: { type: string }) => {
  const type: string = props.type;
  if (type === "banner") {
    return (
      <div className={styles.skeleton__banner}>
        <div className={styles.banner__header}>
          <Shimmer />
        </div>
        <div className={styles.banner__img}>
          <Shimmer />
        </div>
        <div className={styles.banner__caption}>
          <Shimmer />
        </div>
        <div className={styles.banner__info}>
          <Shimmer />
        </div>
      </div>
    );
  } else if (type === "img") {
    return (
      <div className={styles.imageView}>
        <Shimmer />
      </div>
    );
  } else {
    return (
      <div className={styles.skeleton__card}>
        <div className={styles.card__img}>
          <Shimmer />
        </div>
        <div className={styles.card__title}>
          <Shimmer />
        </div>
        <div className={styles.card__line} />
        <div className={styles.card__info}>
          <div className={styles.info__id}>
            <Shimmer />
          </div>
          <div className={styles.info__count}>
            <Shimmer />
          </div>
        </div>
      </div>
    );
  }
};

export default Skeleton;
