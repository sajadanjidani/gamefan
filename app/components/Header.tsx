'use client'

import React from "react";

// component
import CategoryBtn from "./CategoryBtn";

type Category = {
  id: number;
  title: string;
};

type HeaderState = {
  CategoryInfo: Category[];
};

export default class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      CategoryInfo: [
        { id: 1, title: "Shooting" },
        { id: 2, title: "Action" },
      ],
    };
  }

  render() {
    return (
      <header className="md:h-dvh py-10 mt-5 relative">
        {/* bgImage */}
        <img
          alt="backgroundImage"
          src="./images/bgHeader.jpg"
          className="w-full h-full object-fill opacity-10 absolute -z-10 sm:-mt-3"
        />

        {/* content */}
        <div className="h-full md:flex grid">
          {/* cover */}
          <div
            className="w-full sm:w-2/3 md:w-1/2 lg:w-2/6 md:mx-0 h-full sm:ml-10 md:flex md:justify-center md:items-center"
            style={{ margin: "0 auto" }}
          >
            <img
              alt="imageCover"
              src="./images/gameCovers/CyberpunkCover.webp"
              className="w-9/10 h-9/10 mx-auto overflow-hidden rounded-md shadow-2xl shadow-purple-800"
            />
          </div>

          {/* info */}
          <div className="flex justify-center items-center md:w-4/6 w-full h-full sm:mt-0 mt-5 md:**:text-left **:text-center md:**:mx-0 **:mx-auto">
            <div className="grid grid-rows-2 sm:w-4/5 w-4/5 md:gap-0 sm:gap-5 gap-3 lg:mt-0 md:-mt-15">
              <h2 className="text-5xl font-bold lg:mb-0 md:mb-3">
                CyberPunk
              </h2>

              <div className="flex justify-end items-center gap-3">
                {this.state.CategoryInfo.map((category) => (
                  <CategoryBtn key={category.id} {...category} />
                ))}
              </div>

              <p className="leading-7 mt-3">
                A novice mercenary fighting for survival in a brutal reality,
                one day this hero, by carrying out one of the orders, acquires a
                chip that hides the secret of immortality, and with this he
                intends to become one of the most powerful cyberpunks. We can
                create the main character, such as gender, appearance, origin of
                the character, and provide additional options for the mission.
              </p>

              <div className="relative md:px-0 px-17">
                <button className="flex justify-center items-center w-30 h-12 md:left-auto -left-0 rounded-xl absolute mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600 hover:cursor-pointer">
                  Download
                </button>

                <div className="w-30 h-12 rounded-xl absolute blur-md -z-10 -left-0.5 mt-3 bg-linear-90 from-purple-600 from-30% to-blue-600"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}