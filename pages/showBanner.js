import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./showBanner.module.scss";
import API from "../src/API";
import ErrorPage from "../src/components/ErrorPage";
import Skeleton from "../src/components/Skeleton/index";
import Head from "next/head";

const api = API.getInstacne();

const showBanner = () => {
  const router = useRouter();
  const [info, setInfo] = useState(() => {});
  const [error, setError] = useState(() => false);
  const [width, setWidth] = useState(() => [undefined]);
  const [height, setHeight] = useState(() => [undefined]);
  const [ready, setReady] = useState(() => false);

  const getPicInfo = (picId) => {
    (async () => {
      try {
        setReady(false);
        let data = await api.GetPicInfo({ picId: picId });
        setInfo(data);
        updateWidth();
        setReady(true);
        setError(false);
      } catch (e) {
        setError(true);
      }
    })();
  };
  useEffect(() => {
    getPicInfo(parseInt(router.query.id));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    () => window.removeEventListener("resize", updateWidth);
  }, [width, height]);
  const updateWidth = () => {
    let W = window.innerWidth;
    let H = window.innerHeight;
    setWidth(W);
    setHeight(H);
  };

  return (
    <div className={styles.banner__container}>
      <Head>
        <title>{`Banner #${router.query.id}`}</title>
      </Head>
      {error && <ErrorPage />}
      {!error && ready && (
        <div>
          <h2>banner id : {info.id}</h2>
          <img
            src={info.download_url}
            width={width * 0.8}
            height={height * 0.7}
          />
          <span>photo by: {info.author}</span>
          <p>
            for more info click{" "}
            <a href={info.url} target="_blank">
              here
            </a>
          </p>
        </div>
      )}
      {!error && !ready && <Skeleton type="banner" />}
    </div>
  );
};

export default showBanner;
