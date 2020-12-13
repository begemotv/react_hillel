import React from 'react';

const Title = (props) => {
  const {children, classNames} = props;

  return (
    React.createElement(`h${size}`, {className: classNames, children})
    )
}

export default Title;