import { lazy, Suspense } from "react";

import CarouselController from "../components/CarouselController/Carousel";
import Loading from "../components/Loading";

const CardListItems = lazy(() => import("../components/CardList"));
const Player = lazy(() => import("../components/Player/Player"));
const VideoList = lazy(() => import("../components/VideoList/VideoList"));

const Dashboard = () => {
  return (
    <div>
      <CarouselController />
      <Suspense fallback={<Loading />}>
        <CardListItems />
        <VideoList />
        <Player />
      </Suspense>
    </div>
  );
};

export default Dashboard;
