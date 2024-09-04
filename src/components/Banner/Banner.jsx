import "./banner.css";
import HeroImg from "../../assets/lmgs/sample_banner-removebg-preview.png";
import stackIcons from "../../assets/lmgs/icons/icons";

import React from "react";

const Banner = () => {
  return (
    <section id="home" className="w-full h-screen lg:pb-20 ">
      <div className="flex flex-col py-16 lg:py-32">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="w-1/2 text-white text-center lg:text-left">
            <h1 className="text-2xl py-4 lg:font-semibold lg:text-4xl ">
              Hi, I'm{" "}
              <span className="bg-gradient-to-tr from-rose-500 to-indigo-500 text-transparent bg-clip-text">
                Matheshwaran
              </span>{" "}
              <span className="strokeSpanText text-transparent">Kumaravel</span>
              <h3 className="text-sm lg:text-xl py-5">
                ( Aspiring MERN Full-stack Developer )
              </h3>
            </h1>
          </div>
          <div className="w-2/5 lg:w-1/5 flex justify-center items-center ">
            <img
              src={HeroImg}
              alt="Hero-img"
              className="w-full border-4 border-white rounded-full bg-indigo-600"
            />
          </div>
        </div>
        <div className="w-3/4 wrapper mx-auto  lg:mt-20">
          <div className="item item-1">
            <i className="bx bxl-html5"></i>
          </div>
          <div className="item item-2">
            <i className="bx bxl-css3"></i>
          </div>
          <div className="item item-3">
            <i className="bx bxl-tailwind-css"></i>
          </div>
          <div className="item item-4">
            <i className="bx bxl-javascript"></i>
          </div>
          <div className="item item-5">
            <i className="bx bxl-react"></i>
          </div>
          <div className="item item-6">
            <i className="bx bxl-redux"></i>
          </div>
          <div className="item item-7">
            <i className="bx bxl-mongodb"></i>
          </div>
          <div className="item item-8">
            <i className="bx bxl-visual-studio"></i>
          </div>
          <div className="item item-9">
            <i className="bx bxl-nodejs"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

{
  /* <div className="w-full">
              
            </div> */
}
