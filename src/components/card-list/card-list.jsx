import React from "react";

import './card-list.css';
import UserCard from "../user-card/user-card";

const CardList = (props) => {
  const {users} = props;
  return (
    <div className="card__list">
       {users.reverse().map((user) => 
          <UserCard 
              key={user.id}
              user={user}
          />
       )}
    </div>
  )
}

export default CardList;