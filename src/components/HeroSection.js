import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import { AiFillPlayCircle } from "react-icons/ai";

const HeroSection = () => {
  const threeFive = () => {
    var sum = 0;
    // var i = 0;
    // while (i < 1000) {
    // if (i % 3 === 0 || i % 5 === 0) {
    //   sum += i;
    // }
    //   i++;
    // }
    for (let i = 0; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    console.log(sum);
  };
  return (
    <div className="hero-container">
      {/* <video src={vid} autoPlay loop muted /> */}
      <h1>Cordless and Proud</h1>
      <p>Praise be to the stone</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={threeFive}
        >
          Get started
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <AiFillPlayCircle className="play" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
