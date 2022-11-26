import { useDispatch } from "react-redux";
import { next, prev } from "../features/cardList/cardListSlice";
import { LeftArrow, RightArrow } from "./UI/Icons";

const CarouselController = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="grid grid-cols-8 my-2">
          <h3 className="m-2 text-slate-500 text-base">Realase This Week</h3>
          <hr className=" col-span-6 my-5 -ml-4 -mr-10 border-2" />
          <div className="my-2 ml-10">
            <button
              className="text-sky-900 hover:text-sky-600"
              onClick={() => {
                dispatch(prev());
              }}
            >
              {LeftArrow()}
            </button>
            <button
              className="text-sky-900 hover:text-sky-600"
              onClick={() => {
                dispatch(next());
              }}
            >
              {RightArrow()}
            </button>
          </div>
        </div>
    </>
  )
}

export default CarouselController