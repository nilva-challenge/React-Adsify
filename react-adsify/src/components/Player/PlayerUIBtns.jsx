import { useDispatch } from "react-redux";
import {
  StatusHandler,
  ForwardHandler,
  BackwardHandler,
} from "../../features/player/playerSlice";

// Player Btns

export const ForwardBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="m-1 rounded-full hover:bg-sky-400"
      onClick={() => {
        dispatch(ForwardHandler());
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 m-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
        />
      </svg>
    </button>
  );
};

export const BackwardBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="m-1 rounded-full hover:bg-sky-400"
      onClick={() => {
        dispatch(BackwardHandler());
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 m-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
        />
      </svg>
    </button>
  );
};

export const PlayBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="rounded-full bg-sky-500 hover:bg-sky-400 text-white"
      onClick={() => {
        dispatch(StatusHandler(false));
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 m-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
    </button>
  );
};

export const PauseBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="rounded-full bg-sky-500 hover:bg-sky-400 text-white"
      onClick={() => {
        dispatch(StatusHandler(true));
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 m-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      </svg>
    </button>
  );
};

export const CloseBtn = () => {
  return (
    <button className="hover:bg-red-500">
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
