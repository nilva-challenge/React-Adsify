import React from "react";
import styles from "./Shimmer.module.scss";

const Shimmer = () => {
  return (
    <div className={styles.shimmer__wrapper}>
      <div className={styles.shimmer} />
    </div>
  );
};

export default Shimmer;
