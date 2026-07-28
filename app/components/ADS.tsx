'use client'

import React from "react";

export default class ADS extends React.Component {
  render() {
    return (
      <section className="container mx-auto md:h-85 sm:h-200 h-170 overflow-hidden md:rounded-r-4xl flex md:flex-row flex-col-reverse xl:px-0 px-5">

        {/* image box */}
        <div className="xl:w-3/10 lg:w-4/10 md:w-4/10 w-full sm:h-full h-4/10 flex justify-center items-end">
          <img
            alt="imageADS"
            src="./images/ADS/ADSImage.webp"
          />
        </div>

        {/* content */}
        <div className="relative xl:w-7/10 lg:w-6/10 md:w-6/10 w-full sm:h-full h-6/10 flex justify-center items-center md:**:text-left **:text-center md:**:mx-0 **:mx-auto">

          <div className="grid justify-center items-center xl:gap-5 lg:gap-3 md:gap-1 sm:gap-5 xl:-mt-10 lg:-mt-17 md:-mt-12 sm:mt-0 mt-10 w-9/10 gap-5">

            <h3 className="font-bold lg:text-xl md:text-base text-xl">
              Buy all kinds of gift cards and other items on the Gamefan site
            </h3>

            <p className="leading-7 lg:text-base md:text-xs text-sm">
              Lorem Ipsum is a fabricated text with the production of incomprehensible simplicity from the printing industry and using graphic designers. Printers and texts, but also newspapers and magazines in columns and rows as necessary and for the current conditions of technology required and diverse applications aimed at improving practical tools. Many books in sixty-three percent of the past, present and future require a lot of knowledge of society and specialists
            </p>

            <div className="relative md:px-0 px-17">
              <button className="flex justify-center items-center lg:w-35 md:w-30 lg:h-12 md:h-10 md:left-auto md:text-sm w-35 h-12 left-0 rounded-xl absolute mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600 hover:cursor-pointer">
                View all items
              </button>

              <div className="lg:w-35 md:w-30 lg:h-12 md:h-10 w-35 h-12 rounded-xl absolute blur-md -z-10 -left-0.5 mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600"></div>
            </div>

          </div>

          {/* bg Image */}
          <img
            alt="backgroundImage"
            src="./images/ADS/ADSbgImage.webp"
            className="w-full h-full object-fill opacity-10 absolute -z-10 sm:-mt-3"
          />

        </div>

      </section>
    );
  }
}