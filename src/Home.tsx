import React from "react";
import "animate.css";

import {
  Nav,
  AboutSection,
  Cards,
  Contact,
  DownloadModal,
  TechMarquee,
  HeroSection,
} from "./components";

import { useDownloadCV } from "./hooks/useDownloadCV";

const Home: React.FC = () => {
  const { showOptions, downloadFile, closeOptions } = useDownloadCV();

  return (
    <>
      <Nav />
      <section className="w-full pt-10">
        <HeroSection />
        {showOptions && (
          <DownloadModal onDownload={downloadFile} onCancel={closeOptions} />
        )}
        <TechMarquee />
      </section>
      <div className="flex items-center justify-center">
        <AboutSection />
      </div>
      <div className="flex justify-center text-center flex-wrap">
        <h3
          id="Works"
          className="text-2xl font-bold text-center text-[#ffc23c] sm:text-3xl pt-10 w-full"
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

export default Home;
