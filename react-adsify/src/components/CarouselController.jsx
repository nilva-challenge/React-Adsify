import { useDispatch } from "react-redux";
import { next, prev } from "../features/cardList/cardListSlice";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="text-sky-900 hover:text-sky-600"
              onClick={() => {
                dispatch(next());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
    </>
  )
}

export default CarouselController