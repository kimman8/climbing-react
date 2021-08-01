import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Modal } from "./Modal";

const CardsOutdoor = ({ showModal, setShowModal }) => {
  return (
    <div className="cards">
      <h1>
        “The best part of climbing is when it all clicks and gravity ceases to
        exist.” – Chris Sharma
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/chrisSharmaWallpaper.jpeg").default}
              text="Chris Sharma"
              label="Legend"
              path="/outdoor"
            />
            <CardItem
              src={require("../images/alex-honnold.jpeg").default}
              text="camping on the mountain"
              label="drawing"
              path="/outdoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/abandonedTower.jpeg").default}
              text="Abandoned power station tower turned rock climbing gym!"
              label="adventure"
              path="/outdoor"
            />
            <CardItem
              src={require("../images/alex-honnold2.jpeg").default}
              text="camping on the mountain"
              label="High Ball"
              path="/outdoor"
            />
            <CardItem
              src={require("../images/alexMegos.jpeg").default}
              text="Alex Megos"
              label="Outdoor"
              path="/outdoor"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/climbingLED.jpeg").default}
              text="LED time lapse mountain"
              label="LED"
              path="/indoor"
            />
            <CardItem
              src={require("../images/Midtbo_Thors-Hammer_Cover.jpeg").default}
              text="Magnus Midtbo"
              label="Magnus"
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
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <h1>jho</h1>
      </div>
    </div>
  );
};

export default CardsOutdoor;
