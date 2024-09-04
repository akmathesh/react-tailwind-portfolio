import "./projects.css";
import bbqImg from "../../assets/lmgs/svg/undraw_barbecue_3x93.svg";
import blogImg from "../../assets/lmgs/svg/undraw_blog.svg";
import foodImg from "../../assets/lmgs/svg/undraw_breakfast_psiw.svg";
import shoppingImg from "../../assets/lmgs/svg/undraw_shopping_app_flsj.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const data = [
  { name: "Hotel Project", img: `${bbqImg}` },
  { name: "Blog Project", img: `${blogImg}` },
  { name: "Food Project", img: `${foodImg}` },
  { name: "E-Commerce Project", img: `${shoppingImg}` },
];

const Projects = () => {
  const config = {
    title: "Projects",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <section id="projects" className="w-3/4 m-auto py-32">
        <h1 className="text-center text-4xl font-bold -tracking-tighter text-white">
          {config.title}
        </h1>
        <div className="container m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={index}
                  className="mr-5 bg-white/15 h-40  relative rounded-xl text-black"
                >
                  <div className="h-56 rounded-xl bg-indigo-900 flex justify-center items-center">
                    <img
                      src={d.img}
                      alt="images"
                      className="h-44 w-44 rounded-full bg-red-500 py-10"
                    />
                  </div>
                  <div className="flex flex-col w-full h-56 gap-4 p-4 absolute opacity-0 hover:opacity-100 hover:bg-black/70 top-0 left-0 rounded-xl items-center justify-around">
                    <p className="text-xl lg:text-3xl font-medium text-center lg:font-bold text-white text-shadow text-shadow-black text-shadow-blur-0 text-shadow-x-2 text-shadow-y-2">
                      {d.name}
                    </p>
                    <button className="bg-red-500 px-3 py-2 rounded text-white">
                      Open it
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
