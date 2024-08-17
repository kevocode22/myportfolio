import React, { useState } from "react";
import "../index.css";
import "animate.css";

import Nav from "./Nav";
import Cards from "./Cards";
import Marquee from "react-fast-marquee";
import {
  NEXTJS,
  JAVASCRIPT,
  TYPESCRIPT,
  CYPRESS,
  CSS,
  HTML,
  MONGO,
  EXPRESS,
  GITHUB,
  NODE,
  NPM,
  REACT,
  REDUX,
  ProfilePic,
} from "../assets";

import Contact from "./Contact";
import Button from "./Button";

const Hero: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = () => {
    setShowOptions(true);
  };

  const downloadFile = (language: string) => {
    const link = document.createElement("a");
    link.href =
      language === "es" ? "/KevinOcampoESP.pdf" : "/KevinOcampoEN.pdf";
    link.download =
      language === "es" ? "KevinOcampoESP.pdf" : "KevinOcampoEN.pdf";
    link.click();
    setShowOptions(false);
  };

  return (
    <>
      <div>
        <Nav />
      </div>
      <section className="w-full pt-10">
        <div className="flex flex-col items-center w-full px-6 sm:flex-row sm:justify-between lg:flex lg:justify-center lg:items-center">
          <div className="flex flex-col items-center text-center">
            <h1 className="font-['Josefin_Sans'] font-bold animate__animated animate__bounceInLeft">
              HI! I´M KEVIN.
            </h1>
            <h2 className="font-['Josefin_Sans'] font-semibold text-2xl text-[#FFC23C] text-shadow-lg animate__animated animate__bounceInLeft">
              A FULL STACK DEVELOPER
            </h2>
            <div className="flex w-full justify-evenly">
              <Button onClick={handleDownload}>Download CV</Button>
              <Button href="/#Contact">Contact Me</Button>
            </div>
          </div>
          <div className="containerImg hidden sm:flex items-center justify-center w-[20%]">
            <img
              src={ProfilePic}
              alt="PicProfile"
              className="PicProfile animate__animated animate__bounceInRight"
            />
          </div>
        </div>

        {showOptions && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded shadow-md">
              <p className="mb-4 text-base">Select the language:</p>
              <div className="flex flex-col gap-y-4 justify-center text-center items-center">
                <Button
                  onClick={() => downloadFile("es")}
                  className="m-2 bg-black text-white"
                >
                  Español
                </Button>
                <Button
                  onClick={() => downloadFile("en")}
                  className="m-2 bg-black text-white"
                >
                  English
                </Button>
                <button
                  onClick={() => setShowOptions(false)}
                  className="m-2 bg-red-500 text-white text-sm"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        <Marquee
          gradient={false}
          className="marqueeReact h-[10vh] lg:m-0 md:m-0 xl:m-0 mt-5 "
          speed={60}
        >
          <div className="flex items-center justify-center h-16">
            <img src={REDUX} alt="Redux" />{" "}
            <p className="text-white text-sm">Redux</p> |{" "}
            <img src={REACT} alt="React.js" />|{" "}
            <img src={NEXTJS} alt="Next.js" /> | |
            <img src={JAVASCRIPT} alt="Javascript" />{" "}
            <p className="text-white text-sm">Javascript</p>|{" "}
            <img src={TYPESCRIPT} alt="Typescript" />{" "}
            <p className="text-white text-sm">Typescript</p> |
            <img src={HTML} alt="html" />{" "}
            <p className="text-white text-sm">HTML</p> |{" "}
            <img src={CSS} alt="css" />{" "}
            <p className="text-white text-sm">CSS</p> |{" "}
            <img src={NODE} alt="Node.js" /> |{" "}
            <img src={EXPRESS} alt="Express" /> |{" "}
            <img src={MONGO} alt="Mongo DB" /> | <img src={NPM} alt="NPM" /> |{" "}
            <img src={GITHUB} alt="Github" />
            <img src={CYPRESS} alt="Cypress" />
          </div>
        </Marquee>
      </section>

      <div className="flex justify-center items-center flex-col text-center">
        <h3
          className="text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl pt-10 pb-14"
          id="About"
        >
          ABOUT ME
        </h3>
        <p className="font-['Questrial'] text-center text-xl bg-gray-100 bg-opacity-70 p-4 rounded-lg shadow-lg border-l-4 border-yellow-500 mx-6 ">
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
};

export default Hero;
