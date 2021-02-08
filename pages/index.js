import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/store/redux/store";
// import { store } from "../src/store/redux/store";

import MainPage from "../src/components/MainPage";

function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="description" content="code challange of Nilva Co." />
          <title>Nilva code challenge</title>
        </Head>
        <MainPage />
      </PersistGate>
    </Provider>
  );
}
export default Home;
