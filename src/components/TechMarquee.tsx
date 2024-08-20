import React from "react";
import Marquee from "react-fast-marquee";
import {
  CYPRESS,
  EXPRESS,
  GITHUB,
  HTML,
  JAVASCRIPT,
  MONGO,
  NEXTJS,
  NODE,
  NPM,
  REACT,
  REDUX,
  TYPESCRIPT,
  CSS,
} from "../assets";

const TechMarquee = () => {
  return (
    <Marquee
      gradient={false}
      className="marqueeReact h-[10vh] lg:m-0 md:m-0 xl:m-0 mt-5 "
      speed={60}
    >
      <div className="flex items-center justify-center h-16">
        <img src={REDUX} alt="Redux" />{" "}
        <p className="text-white text-sm">Redux</p> |{" "}
        <img src={REACT} alt="React.js" />| <img src={NEXTJS} alt="Next.js" /> |
        |
        <img src={JAVASCRIPT} alt="Javascript" />{" "}
        <p className="text-white text-sm">Javascript</p>|{" "}
        <img src={TYPESCRIPT} alt="Typescript" />{" "}
        <p className="text-white text-sm">Typescript</p> |
        <img src={HTML} alt="html" /> <p className="text-white text-sm">HTML</p>{" "}
        | <img src={CSS} alt="css" /> <p className="text-white text-sm">CSS</p>{" "}
        | <img src={NODE} alt="Node.js" /> | <img src={EXPRESS} alt="Express" />{" "}
        | <img src={MONGO} alt="Mongo DB" /> | <img src={NPM} alt="NPM" /> |{" "}
        <img src={GITHUB} alt="Github" />
        <img src={CYPRESS} alt="Cypress" />
      </div>
    </Marquee>
  );
};

export default TechMarquee;
