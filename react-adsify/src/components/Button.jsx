import React from "react";

const Button = ({classBtn, click, children}) => {
  return (
    <button className={classBtn} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
