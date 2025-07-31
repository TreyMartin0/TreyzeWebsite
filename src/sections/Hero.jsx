import React from 'react';
import { words } from '../constants/index.js';

const Hero = () => {
  return (
    <section id="Hero" className="relative overflow-hidden">
      <div classNme="absolute top-0 left-0 z-10">
        <img src="/images/bp.png" alt="background" />
      </div>

      <div className="hero-layout">
        {}
        <header clasName="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Developer that
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2 w-max">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>CRM solutions</h1>
              <h1>thats delivers results</h1>
            </div>
          </div>
        </header>
        {}
      </div>
    </section>
  );
};

export default Hero;
