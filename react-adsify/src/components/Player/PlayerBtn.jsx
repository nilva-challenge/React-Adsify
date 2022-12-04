import React from 'react'

const PlayerBtn = (props) => {
  return (
    <button className={props.btnClass} onClick={props.click}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={props.svgClass}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.pathD} />
      </svg>
    </button>
  )
}

export default PlayerBtn