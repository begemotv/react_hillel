import React from 'react';

const Button = (props) => {
  const {children, classNames, onCLickHandler} = props;

  return (
    <button type="button" onClick={onCLickHandler}>{childen}</button>
  )
}

export default Button;