import React from "react";

const AboutSection = () => (
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
      -Some things I enjoy are spending time with my family👨‍👩‍👧‍👦, eating pizza🍕,
      and playing soccer⚽!
      <br />
      -I'm proud to have had the opportunity to work for a global leader like
      PUMA.
      <br />
      -I have expertise in technologies such as React, Next, Node, Typescript,
      and Cypress, among others.
      <br />
      -I'm always working on a side project to incorporate new tools and
      concepts. If you want to know what I'm currently working on, feel free to
      check out my GitHub profile 😁.
    </p>
  </div>
);

export default AboutSection;
