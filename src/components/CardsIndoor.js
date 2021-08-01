import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

const CardsIndoor = () => {
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
              src={require("../images/ashima1.jpeg").default}
              text="Ashima Shiraishi"
              label="Bouldering"
              path="/indoor"
            />
            <CardItem
              src={require("../images/ashima3.jpeg").default}
              text="Ashima Shiraishi Lead"
              label="Lead"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/magnus2.jpeg").default}
              text="Magnus Midtbo"
              label="Beast"
              path="/indoor"
            />
            <CardItem
              src={require("../images/churchclimb.jpeg").default}
              text="Church converted into a climbing gym"
              label="pray"
              path="/indoor"
            />
            <CardItem
              src={require("../images/climbingComp.jpeg").default}
              text="Climbing Competition"
              label="Bouldering"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/indoorgym.jpeg").default}
              text="Climbing Competition"
              label="Bouldering"
              path="/indoor"
            />
            <CardItem
              src={require("../images/indoorgym1.jpeg").default}
              text="Climbing Competition"
              label="Bouldering"
              path="/indoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/magnus3.jpeg").default}
              text="Magnus Midtbo"
              label="Beast"
              path="/indoor"
            />
            <CardItem
              src={require("../images/moonBoard.jpeg").default}
              text="Moon Board"
              label="Train"
              path="/indoor"
            />
            <CardItem
              src={require("../images/tomoaNarasaki.jpeg").default}
              text="Tomoa"
              label="Train"
              path="/indoor"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsIndoor;
