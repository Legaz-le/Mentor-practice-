import React from "react";
import retro from "./assets/images/image-retro-pcs.jpg";
import gamepad from "./assets/images/image-gaming-growth.jpg";
import laptop from "./assets/images/image-top-laptops.jpg";
import "./css/Secondarticle.css";

const Secondarticle = () => {
  return (
    <section className="last-section">
      <div className="inside-section">
        <img src={retro} alt="retro" className="last-img" />
        <div className="information-section">
        <p className="number">01</p>
        <p className="number-title"> Reviving Retro PCs</p>
        <p className="number-description">What happens whenold PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="inside-section">
        <img src={laptop} alt="laptop"  className="last-img" />
        <div className="information-section">
        <p className="number">02</p>
        <p className="number-title">Top 10 Laptops of 2022</p>
        <p className="number-description"> Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="inside-section">
        <img src={gamepad} alt="gamepad" className="last-img" />
        <div className="information-section">
        <p className="number"> 03</p>
        <p className="number-title">The Growth of Gaming</p>
        <p className="number-description"> How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};

export default Secondarticle;
