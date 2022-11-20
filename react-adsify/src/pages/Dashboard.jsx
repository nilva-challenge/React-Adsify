import { lazy, Suspense } from "react";

import CarouselController from "../components/CarouselController";
import Loading from "../components/Loading";

const CardListItems = lazy(() => import("../components/CardList"));
const Player = lazy(() => import("../components/Player"));

const Dashboard = () => {
  return (
    <div>
      <CarouselController />
      <Suspense fallback={<Loading />}>
        <CardListItems />
        <Player />
      </Suspense>
    </div>
  );
};

export default Dashboard;
