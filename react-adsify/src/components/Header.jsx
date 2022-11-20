import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const {count} = useSelector(store => store.tracker);
  return (
    <header className="bg-red-300 relative">
      <div className="text-right text-gray-800 py-6 px-6">
        <h1 className="text-5xl text-white font-bold mt-0 mb-6">
          <Link to="/">Your Favourite Tunes</Link>
        </h1>
        <h3 className="text-3xl text-white font-bold mb-8">
          All{" "}
          <button className="text-yellow-300 hover:text-sky-400">
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
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>{" "}
          and all{" "}
          <button className="text-cyan-600 hover:text-sky-700">
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
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
        </h3>
      </div>
      <div className="text-white m-4 p-4">Your Views {count}</div>
    </header>
  );
};

export default Header;
