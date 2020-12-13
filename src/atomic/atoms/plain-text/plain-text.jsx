import React from 'react';

const PlainText = (props) => {
  const {children, classNames} = props;

  return (
    <p className={classNames}>{children}</p>
  )
}

export default PlainText;