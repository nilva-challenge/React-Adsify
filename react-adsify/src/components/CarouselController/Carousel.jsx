import { useDispatch } from "react-redux";
import { next, prev } from "../../features/cardList/cardListSlice";
import { LeftArrow, RightArrow } from "../Icons/Icons";
import Button from "../Button";

const Carousel = () => {
  const dispatch = useDispatch();
  const classBtn = "text-sky-900 hover:text-sky-600";
  return (
    <>
      <div className="grid grid-cols-8 my-2">
        <h3 className="m-2 text-slate-500 text-base">Realase This Week</h3>
        <hr className=" col-span-6 my-5 -ml-4 -mr-10 border-2 max-lg:hidden" />
        <div className="my-2 ml-10 max-lg:ml-2">
          <Button classBtn={classBtn} click={() => dispatch(prev())}>
            {LeftArrow()}
          </Button>
          <Button classBtn={classBtn} click={() => dispatch(next())}>
            {RightArrow()}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
