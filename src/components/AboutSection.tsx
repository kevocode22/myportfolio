import React from "react";

const AboutSection = () => {
  return (
    <article
      className="rounded-xl border-2 border-gray-100 bg-white lg:w-4/5 my-10 mx-2 max-h-fit text-black"
      id="About"
    >
      <section className="text-black" style={{ textShadow: "none" }}>
        <div className="container flex flex-col">
          <div className=" mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h3 className="text-2xl">ABOUT ME</h3>
                  <div className="w-[30%] h-1 bg-[#FFC23C] rounded mt-2 mb-4 visible" />
                  <img
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Light%20Skin%20Tone.png"
                    alt="Developer coding GIF"
                    className="hidden sm:block max-h-48" 
                  />
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left px-4 w-full">
                <p className="text-lg mb-4">
                  I´m a full-stack developer with a specialization in frontend
                  development 👨‍💻
                  <br />
                  -Some things I enjoy are spending time with my family👨‍👩‍👧‍👦,
                  eating pizza🍕, and playing soccer⚽!
                  <br />
                  -I'm proud to have had the opportunity to work for a global
                  leader like PUMA.
                  <br />
                  -I have expertise in technologies such as React, Next, Node,
                  Typescript, and Cypress, among others.
                  <br />
                  -I'm always working on a side project to incorporate new tools
                  and concepts. If you want to know what I'm currently working
                  on, feel free to check out my GitHub profile 😁.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
export default AboutSection;
