/* This example requires Tailwind CSS v2.0+ */
import "../index.css";
import Buttons from "./Buttons";
import profilePic from "../assets/profileF.png";
import Nav from "./Nav";
import Cards from "./Cards";
import Marquee from "react-fast-marquee";
import NEXTJS from "../assets/nextJs.png";

import JAVASCRIPT from "../assets/javascript.png";
import TYPESCRIPT from "../assets/typescript.png";
import CSS from "../assets/css.png";
import HTML from "../assets/html5.png";
import MONGO from "../assets/MongoDB.png";
import EXPRESS from "../assets/express.png";
import REACT from "../assets/React.png";
import NPM from "../assets/npm.png";
import NODE from "../assets/node.png";
import GITHUB from "../assets/github.png";
import REDUX from "../assets/redux.png";
import Contact from "./Contact";
import "animate.css";

export default function Hero() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <section className="w-full">
        <div className="flex flex-col items-center w-full px-6 sm:flex-row sm:justify-between lg:flex lg:justify-center lg:items-center">
          <div className="flex flex-col items-center text-center sm:text-left lg:items-center lg:text-center">
            <h1 className="font-['Josefin_Sans'] font-bold animate__animated animate__bounceInLeft">
              HI! I´M KEVIN.
            </h1>
            <h2
              className="font-['Josefin_Sans'] font-semibold animate__animated animate__bounceInLeft"
              style={{
                fontSize: "6vh",
                color: "#FFC23C",
                textShadow: "2px 2px 2px 2px black",
              }}
            >
              A FULL STACK DEVELOPER
            </h2>
            <div className="flex justify-center sm:justify-start items-center pt-5">
              <Buttons />
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center w-[20%]">
            <img
              src={profilePic}
              alt="PicProfile"
              className="PicProfile animate__animated animate__bounceInRight"
            />
          </div>
        </div>

        <div>
          <Marquee
            className="marqueeReact my-4 marker:text-white"
            gradientColor="false"
            speed={90}
          >
            | <img src={REACT} alt="React.js" /> |{" "}
            <img src={NEXTJS} alt="Next.js" /> | <img src={REDUX} alt="Redux" />{" "}
            <img src={JAVASCRIPT} alt="Javascript" /> |{" "}
            <img src={TYPESCRIPT} alt="Typescript" /> |
            <img src={HTML} alt="html" /> | <img src={CSS} alt="css" /> |{" "}
            <img src={NODE} alt="Node.js" /> |{" "}
            <img src={EXPRESS} alt="Express" /> |{" "}
            <img src={MONGO} alt="Mongo DB" /> | <img src={NPM} alt="NPM" /> |{" "}
            <img src={GITHUB} alt="Github" />
          </Marquee>
        </div>
      </section>

      <div className="flex justify-center items-center flex-col text-center">
        <h3
          className="text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl pt-10 pb-14"
          id="About"
        >
          ABOUT ME
        </h3>
        <p className="font-['Questrial'] text-center text-xl">
          Hi, I'm Kevin Ocampo, a full-stack developer with a specialization in
          frontend development 👨‍💻
          <br />
          -Some things I enjoy are spending time with my family👨‍👩‍👧‍👦, eating
          pizza🍕, and playing soccer⚽!
          <br />
          -I'm proud to have had the opportunity to work for a global leader
          like PUMA.
          <br />
          -I have expertise in technologies such as React, Next, Node,
          Typescript, and Cypress, among others.
          <br />
          -I'm always working on a side project to incorporate new tools and
          concepts. If you want to know what I'm currently working on, feel free
          to check out my GitHub profile 😁.
        </p>
      </div>

      <div className="flex justify-center text-center flex-wrap">
        <h3
          id="Works"
          style={{ width: "100%" }}
          className="text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl pt-10"
        >
          WORKS
        </h3>
        <Cards />
      </div>

      <div id="Contact">
        <Contact />
      </div>

      <footer className="flex justify-center text-center text-sm pb-10">
        <p className="text-lg">Made with ❤️ by Kev. All rights reserved</p>
      </footer>
    </>
  );
}
