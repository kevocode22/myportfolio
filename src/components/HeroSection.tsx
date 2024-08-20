import React, { useState } from "react";
import Button from "./Button";
import { useDownloadCV } from "../hooks/useDownloadCV";
import { ProfilePic } from "../assets";
import DownloadModal from "./DownloadModal";

const HeroSection: React.FC = () => {
  const { downloadFile } = useDownloadCV();
  const [showModal, setShowModal] = useState(false);

  const handleModalDownload = (language: string) => {
    downloadFile(language);
    setShowModal(false);
  };
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
          <Button onClick={() => setShowModal(true)} className="bg-black">
            Download CV
          </Button>
          <Button href="/#Contact">Contact Me</Button>
        </div>
      </div>

      {showModal && (
        <DownloadModal
          onDownload={handleModalDownload}
          onCancel={() => setShowModal(false)}
        />
      )}
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
