import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const CardsGear = () => {
  return (
    <div className="cards">
      <h1>
        Bouldering is the art of doing something pointless as difficultly as
        possible!
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/climbing-rope.jpeg").default}
              text="Give your used rope a second life!"
              label="Recycle"
              path="/gear"
            />
            <CardItem
              src={require("../images/moonboard1.jpeg").default}
              text="Moon Board for the gains!"
              label="Train"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/organic1.jpeg").default}
              text="Crash Pad for outdoors"
              label="Protection"
              path="/indoor"
            />
            <CardItem
              src={require("../images/scarpa1.jpeg").default}
              text="Aggressively downturned shoes"
              label="Sticky!"
              path="/indoor"
            />
            <CardItem
              src={require("../images/evolvShaman.png").default}
              text="Aggressively downturned shoes"
              label="Evolv!"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/tokyo-powder-black-330g.jpeg").default}
              text="The Best Chalk"
              label="Chalk"
              path="/indoor"
            />
            <CardItem
              src={require("../images/tokyo-powder-v3-chalk.jpeg").default}
              text="The Best Chalk"
              label="Chalk"
              path="/indoor"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsGear;
