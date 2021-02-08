import React, { useState, useEffect } from "react";
import API from "../../API";
import styles from "./MainPage.module.scss";
import ShowCards from "../ShowCards";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { BiReset } from "react-icons/bi";
import ErrorPage from "../ErrorPage";

const api = API.getInstacne();

export interface IStateProps {
  startId: number;
  numberOfCards: number;
  picList: {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
    selfId: number;
    view_count: number;
  };
  numberOfPages: number;
}

function MainPage() {
  const dispatch = useDispatch();
  const {
    startId,
    numberOfCards,
    picList,
    numberOfPages,
  } = useSelector<IStateProps>((state) => state);
  const [width, setWidth] = useState<number>(() => 0);
  const [height, setHeight] = useState<number>(() => 0);
  const [error, setError] = useState<boolean>(() => false);
  const [ready, setReady] = useState<boolean>(() => true);

  const getPicList = (page_ID) => {
    (async () => {
      try {
        setReady(false);
        let data = await api.GetPics({ page_id: page_ID });
        data.map(
          (item: IStateProps["picList"], index: number) => (
            (item.selfId = (page_ID - 1) * 60 + index), (item.view_count = 0)
          )
        );
        dispatch({ type: "nextLoad", value: data });
        updateWidth();
        setReady(true);
        setError(false);
      } catch (e) {
        setError(true);
      }
    })();
  };
  if (
    ready &&
    picList.length &&
    startId + numberOfCards >= numberOfPages * 60
  ) {
    getPicList(numberOfPages + 1);
    dispatch({ type: "addPageCount" });
  } else if (ready && (!numberOfPages || !picList.length)) {
    dispatch({ type: "reset" });
    getPicList(numberOfPages + 1);
    dispatch({ type: "addPageCount" });
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    () => window.removeEventListener("resize", updateWidth);
  }, [width, height]);
  const updateWidth = () => {
    let W: number = window.innerWidth;
    let H: number = window.innerHeight;
    setWidth(W);
    setHeight(H);
    let cpW: number = Math.floor((W - 155) / 355);
    cpW = cpW === 0 ? 1 : cpW;
    let cpH: number = Math.floor((H - 210) / 405);
    cpH = cpH === 0 ? 1 : cpH;
    let cp: number = cpW * cpH;
    if (cp !== numberOfCards) {
      dispatch({ type: "widthChange", value: cp });
    }
  };
  return (
    <>
      <span className={styles.picsContainer__title}>
        Pics Gallery <BiReset onClick={() => dispatch({ type: "reset" })} />{" "}
      </span>
      {error && <ErrorPage />}
      {!error && ready && (
        <div className={styles.content__picsContainer}>
          <div className={styles.picsContainer__swiper}>
            <div className={styles.swiper__cardContainer}>
              <ShowCards />
            </div>
            <div className={styles.swiper__pagination}>
              <FcPrevious
                className={styles.swiper__icon}
                onClick={() => dispatch({ type: "prev", value: 1 })}
              />
              <div className={styles.pagination__bullets}>
                <a
                  onClick={() => dispatch({ type: "prev", value: 2 })}
                  className={`${styles.bullet} ${
                    startId - 2 * numberOfCards >= 0 ? "" : styles.hide
                  }`}
                >
                  O
                </a>
                <a
                  onClick={() => dispatch({ type: "prev", value: 1 })}
                  className={`${styles.bullet} ${
                    startId - numberOfCards >= 0 ? "" : styles.hide
                  }`}
                >
                  O
                </a>
                <a className={`${styles.bullet} ${styles.active}`}>O</a>
                <a
                  onClick={() => dispatch({ type: "next", value: 1 })}
                  className={`${styles.bullet} ${
                    startId + numberOfCards <= picList.length ? "" : styles.hide
                  }`}
                >
                  O
                </a>
                <a
                  onClick={() => dispatch({ type: "next", value: 2 })}
                  className={`${styles.bullet} ${
                    startId + 2 * numberOfCards <= picList.length
                      ? ""
                      : styles.hide
                  }`}
                >
                  O
                </a>
              </div>
              <FcNext
                className={`${styles.swiper__icon}`}
                onClick={() => dispatch({ type: "next", value: 1 })}
              />
            </div>
          </div>
        </div>
      )}
      {!error && !ready && <ShowCards type="skeleton" />}
    </>
  );
}
export default MainPage;
