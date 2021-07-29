import React from "react";
import "./Cards.css";

import CardItem from "./CardItem";

const Cards = () => {
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
              src={require("../images/climbingLED.jpeg").default}
              text="LED time lapse mountain"
              label="LED"
              path="/indoor"
            />
            <CardItem
              src={require("../images/climbWallpaper.jpeg").default}
              text="camping on the mountain"
              label="drawing"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/abandonedTower.jpeg").default}
              text="Abandoned power station tower turned rock climbing gym!"
              label="adventure"
              path="/indoor"
            />
            <CardItem
              src={require("../images/churchclimb.jpeg").default}
              text="Church converted into a climbing gym"
              label="pray"
              path="/indoor"
            />
            <CardItem
              src={require("../images/climbing-rope.jpeg").default}
              text="Giving retired rope a second life!"
              label="Recycle"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/geometricAesthetics.jpeg").default}
              text="Geometric Aesthetics"
              label="aesthetics"
              path="/indoor"
            />
            <CardItem
              src={require("../images/mapleBridgeOregon.jpeg").default}
              text="Maple Bridge Oregon"
              label="bridge"
              path="/indoor"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
