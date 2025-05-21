import React from "react";
import desktop from "./assets/images/image-web-3-mobile.jpg";
import mobile from "./assets/images/image-web-3-desktop.jpg";
import "./css/Article.css";

const Article = () => {
  return (
    <section className="article">
      <div className="main-body">
        <div className="main-article">
          <picture>
            <source media="(min-width:765px)" srcset={mobile} />
            <img src={desktop} alt="web-3" className="image" />
          </picture>
        </div>
        <div className="under-image-section">
          <div className="title-article">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="description-article">
            <p className="info">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="read-more">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="side-body">
        <h2>New</h2>
        <div className="inside-body">
        <p className="title-info">Hydrogen VS Electric Cars </p>
        <p className="description-info">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
        </div>
        <hr />
        <div className="inside-body">
        <p className="title-info">The Downsides of AI Artistry</p>
        <p className="description-info">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        </div>
        <hr />
        <div className="inside-body">
        <p className="title-info">Is VC Funding Drying Up?</p>
        <p className="description-info">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
        </div>
      </div>
    </section>
  );
};

export default Article;
