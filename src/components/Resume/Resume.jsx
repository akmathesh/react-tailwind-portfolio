import React from "react";
import ResumeImg from "../../assets/lmgs/resume.jpg";

const Resume = () => {
  const config = {
    title: "My resume",
    desc: "You can download and view my CV here",
    img: ResumeImg,
  };
  return (
    <>
      <section id="resume" className="w-full py-2 lg:py-16">
        <div className="w-3/4 mx-auto">
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-semibold text-white text-center">
            {config.title}
          </h1>
          <div className="flex my-16">
            <div className="lg:w-1/2 hidden lg:block lg:px-20 lg:py-16">
              <img src={config.img} alt="resume img" className="rounded-full" />
            </div>
            <div className="w-full lg:px-16 lg:w-1/2  flex items-center">
              <div className="bg-white/15 w-full p-10 rounded text-white text-center flex flex-col justify-center items-center space-y-5">
                <span>{config.desc}</span>
                <a
                  className="bg-red-500 hover:bg-gradient-to-br from-rose-500 to-purple-600 px-3 py-2 rounded text-medium"
                  target="_blank"
                  href="#"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
