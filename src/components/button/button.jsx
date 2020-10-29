import React from "react";

import './button.css';

const Button = (props) => {
  const {buttonState} = props;

  return (
      <button
        className={`button ${buttonState}`}
        onClick={() => {}}
      >{buttonState}</button>
  );
};

export default Button;
