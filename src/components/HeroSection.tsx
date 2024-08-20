import React from "react";
import Button from "./Button";
import { useDownloadCV } from "../hooks/useDownloadCV";
import { ProfilePic } from "../assets";

const HeroSection: React.FC = () => {
  const { handleDownload } = useDownloadCV();
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-['Josefin_Sans'] font-bold animate__animated animate__bounceInLeft">
          HI! I´M KEVIN.
        </h1>
        <h2 className="font-['Josefin_Sans'] font-semibold text-2xl animate__animated animate__bounceInLeft relative">
          <span className="drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] text-[#FFC23C]">
            A FULL STACK DEVELOPER
          </span>
        </h2>
        <div className="flex w-full justify-evenly pt-5">
          <Button onClick={handleDownload} className="bg-black">
            Download CV
          </Button>
          <Button href="/#Contact">Contact Me</Button>
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-center w-[20%]">
        <img
          src={ProfilePic}
          alt="PicProfile"
          className="PicProfile animate__animated animate__bounceInRight"
        />
      </div>
    </div>
  );
};

export default HeroSection;
