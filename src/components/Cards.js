import React from "react";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these epic desitnations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="explore the hidden waterfall deep inside the amazon jungle"
              label="adventure"
              path="/indoor"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
