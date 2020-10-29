import React from "react";

import './notification.css';

const Notification = (props) => {
  const {header, text, notificationState} = props;

  return (
    <div className={`notification ${notificationState}`}>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Notification;
