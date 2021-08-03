import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const CardsGear = () => {
  return (
    <div className="cards">
      <h1>
        Money can not buy you happiness, but it can buy you lots of climbing
        gear and that's pretty damn close.
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
              src={require("../images/8BAJ.jpeg").default}
              text="Effortless chalking up!"
              label="8B+ AJ"
              path="/indoor"
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
              label="VEGAN"
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
              src={require("../images/FAZACHAOS.jpeg").default}
              text="Let the friction be with you in a world where Up and Down are just a matter of perspective!"
              label="BRUSH"
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
