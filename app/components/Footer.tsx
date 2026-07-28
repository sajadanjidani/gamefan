'use client'

import React from "react";

// icons
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";


export default class Footer extends React.Component {
  render() {
    return (
      <footer className="h-100 mt-50 relative">
        {/* border and shadow */}
        <div className="w-full h-0.5 absolute bg-linear-90 from-blue-400 to-purple-400">
          <div className="absolute -top-0.5 w-full h-1 bg-linear-90 from-blue-600 to-purple-700 blur-lg"></div>
        </div>

        {/* content */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-7/10 flex flex-col">

            {/* logo */}
            <div className="flex justify-center items-center">
              <img
                className="w-15 h-15"
                alt="logoImage"
                src="./images/logo.png"
              />

              <h2 className="-ml-10 font-bold text-3xl">
                <span className="text-blue-400">Ga</span>
                <span className="text-purple-400">me</span>
                <span className="text-purple-500">Fan</span>
              </h2>
            </div>


            {/* links */}
            <div>
              <ul className="grid grid-cols-2 grid-rows-2 gap-3 sm:flex mt-5 justify-center items-center text-center sm:text-left">
                <li className="border-r-2 px-4 border-white hover:cursor-pointer hover:text-blue-400 md:text-base text-sm">
                  Support
                </li>

                <li className="sm:border-r-2 px-4 border-white hover:cursor-pointer hover:text-blue-400 md:text-base sm:text-sm text-xs">
                  Contact Us
                </li>

                <li className="border-r-2 px-4 border-white hover:cursor-pointer hover:text-blue-400 md:text-base text-sm">
                  Terms and conditions of use
                </li>

                <li className="px-4 hover:cursor-pointer hover:text-blue-400 md:text-base sm:text-sm text-xs">
                  Frequently asked questions
                </li>
              </ul>
            </div>


            {/* social icons */}
            <div className="flex justify-center items-center sm:gap-10 gap-5 my-10 *:size-7 *:hover:cursor-pointer">
              <SlSocialInstagram className="hover:text-purple-400" />
              <FaFacebook className="hover:text-blue-700" />
              <FaTwitter className="hover:text-blue-400" />
              <FaLinkedin className="hover:text-blue-700" />
              <FaTwitch className="hover:text-purple-700" />
              <FaWhatsapp className="hover:text-green-400" />
            </div>


            {/* copyright */}
            <div className="text-center">
              <p className="text-xs">
                This is a practice project created by{" "}
                <a
                  className="text-blue-400 hover:text-purple-400"
                  href="https://github.com/sajadanjidani"
                  target="_blank"
                >
                  me
                </a>
                .
              </p>

              <p className="mt-2 text-xs">
                Create in 2026/7/28
              </p>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}