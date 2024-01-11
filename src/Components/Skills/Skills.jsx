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
              <p>Shepherding the realms of user interface and experience design, I intricately curated an interactive digital landscape, sculpting a seamless fusion of aesthetics and functionality that bears the hallmark of my design sensibilities.</p>
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
              <p>Crafting a website from concept to fruition, I orchestrated a digital symphony, meticulously designing each element to harmonize with my vision, resulting in a uniquely tailored online experience that reflects my creative touch.</p>
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
              <p>Navigating the realm of graphics design, I intricately weaved visual elements into a captivating tapestry, infusing my creative essence to craft a distinctive visual identity that resonates with the essence of my design philosophy.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Skills };

//hello3
