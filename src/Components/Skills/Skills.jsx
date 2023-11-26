import React from "react";
import "./skills.css";
import UIdesign from "../../assets/ui-design.png";
import websitedesign from "../../assets/website-design.png";
import graphicsdesign from "../../assets/graphics-design.png";

const Skills = () => {
  return (
    <>
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        With a deep-seated passion for software development, I come from Nepal,
        equipped with a strong grasp of computer science fundamentals.
      </span>
    
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIdesign} alt="UIdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text,You can write your own content here.</p>
          </div>
        </div>

        <div className="skillBar">
          <img
            src={websitedesign}
            alt="websitedesign"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>hello guys</p>
          </div>
        </div>

        <div className="skillBar">
          <img
            src={graphicsdesign}
            alt="graphicsdesign"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Graphics Design</h2>
            <p>ohh designer</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export { Skills };
