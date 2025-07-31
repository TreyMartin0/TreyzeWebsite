import React from 'react';
import { words } from '../constants/index';
import Button from '../components/button';
import HeroExperience from '../components/HeroModels/HeroExperience';

const Hero = () => {
  return (
    <section id="Hero" className="relative overflow-hidden">
      <div classNme="absolute top-0 left-0 z-10">
        <img src="/images/bp.png" alt="background" />
      </div>

      <div className="hero-layout">
        {}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Developer that
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center md:gap-3 gap-1 pb-2 w-max">
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
              <h1>CRM Solutions</h1>
              <h1>Thats Delivers Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hello, I'm James (Trey) Martin, a developer from West Virginia
            </p>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="Check me Out" />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
        {}
      </div>
    </section>
  );
};

export default Hero;
