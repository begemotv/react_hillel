import React from "react";

import './user-card.css';

const UserCard = (props) => {
  const {
    user: {
      email,
      id,
      name,
      phone,
      username
    }
  } = props;
  return (
    <div 
      className="card"
      data-id={id}
    >
      <h1 class="name">{name}</h1>
      <p>id: {id}</p>
      <p>tel: {phone}</p>
      <p>nickname: {username}</p>
      <p>email: {email}</p>
    </div>
  )
}

export default UserCard;
