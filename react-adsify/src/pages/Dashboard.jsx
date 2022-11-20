import { lazy, Suspense } from "react";

// import CardList from "../components/CardList";
import CarouselController from "../components/CarouselController";
import Loading from "../components/Loading";

const CardListItems = lazy(() => import("../components/CardList"));

const Dashboard = () => {
  return (
    <div>
      <CarouselController />
      <Suspense fallback={<Loading />}>
        <CardListItems />
      </Suspense>
    </div>
  );
};

export default Dashboard;
