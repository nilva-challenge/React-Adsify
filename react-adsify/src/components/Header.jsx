import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../features/mode/modeSlice";
import { MoonIcon, SunIcon } from "./UI/Icons";

const Header = () => {
  const { count } = useSelector((store) => store.tracker);

  const dispatch = useDispatch();

  return (
    <header className="bg-red-300 relative">
      <div className="text-right text-gray-800 py-6 px-6">
        <h1 className="text-5xl text-white font-bold mt-0 mb-6">
          <Link to="/">Your Favourite Tunes</Link>
        </h1>
        <h3 className="text-3xl text-white font-bold mb-8">
          All{" "}
          <button
            className="text-yellow-300 hover:text-sky-400"
            onClick={() => {
              dispatch(light());
            }}
          >
            {SunIcon()}
          </button>{" "}
          and all{" "}
          <button
            className="text-cyan-600 hover:text-sky-700"
            onClick={() => {
              dispatch(dark());
            }}
          >
            {MoonIcon()}
          </button>
        </h3>
      </div>
      <div className="text-white m-4 p-4">Your Views {count}</div>
    </header>
  );
};

export default Header;
