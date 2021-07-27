import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import vid from "../videos/video-2.mp4";
import { AiFillPlayCircle } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={vid} autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What ya waiting for?!</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
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
