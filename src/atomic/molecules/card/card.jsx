import React from "react";
import {Button, PlainText, Title} from "../../atoms";

const Card = () => {
  return (
    <div className="card">
      <Title size={2}>Hello Header!</Title>
      <PlainText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, repellendus animi neque dolores, quis laudantium sequi harum et ipsam eaque quibusdam expedita reprehenderit iste magni. Vel ad quas ab suscipit?</PlainText>
      <Button>Click Me</Button>
    </div>
  )
}

export default Card;