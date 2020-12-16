import React from "react";

const ButtonShowMore = (props) => {
  const {onShowMoreClick} = props;
  return(
    <button onClick={onShowMoreClick}>SHOW MORE CARDS</button>
  )
}

export default ButtonShowMore;