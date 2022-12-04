import { useDispatch } from "react-redux";
import {
  StatusHandler,
  ForwardHandler,
  BackwardHandler,
} from "../../features/player/playerSlice";


//PlayerBtn
import PlayerBtn from "./PlayerBtn";

// Player Controllers

export const ClosePlayer = () => {
  const btnClass = "hover:bg-red-500";
  const pathD = "M6 18L18 6M6 6l12 12";
  const svgClass = "w-6 h-6";
  return (
    <PlayerBtn
      btnClass={btnClass}
      svgClass={svgClass}
      pathD={pathD}
      click={null}
    />
  );
};

export const PausePlayer = () => {
  const dispatch = useDispatch();

  const btnClass = "rounded-full bg-sky-500 hover:bg-sky-400 text-white";
  const svgClass = "w-5 h-5 m-4";
  const pathD = "M15.75 5.25v13.5m-7.5-13.5v13.5";
  return (
    <PlayerBtn
      btnClass={btnClass}
      svgClass={svgClass}
      pathD={pathD}
      click={() => dispatch(StatusHandler(true))}
    />
  );
};
export const PlayPlayer = () => {
  const dispatch = useDispatch();
  const btnClass = "rounded-full bg-sky-500 hover:bg-sky-400 text-white";
  const svgClass = "w-5 h-5 m-4";
  const pathD =
    "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z";
  return (
    <PlayerBtn
      btnClass={btnClass}
      svgClass={svgClass}
      pathD={pathD}
      click={() => dispatch(StatusHandler(false))}
    />
  );
};

export const BackwardPlayer = () => {
  const dispatch = useDispatch();
  const btnClass = "m-1 rounded-full hover:bg-sky-400";
  const svgClass = "w-5 h-5 m-1";
  const pathD =
    "M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z";
  return (
    <PlayerBtn
      btnClass={btnClass}
      svgClass={svgClass}
      pathD={pathD}
      click={() => dispatch(BackwardHandler())}
    />
  );
};

export const ForwardPlayer = () => {
  const dispatch = useDispatch();
  const btnClass = "m-1 rounded-full hover:bg-sky-400";
  const svgClass = "w-5 h-5 m-1";
  const pathD =
    "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z";
  return (
    <PlayerBtn
      btnClass={btnClass}
      svgClass={svgClass}
      pathD={pathD}
      click={() => dispatch(ForwardHandler())}
    />
  );
};
