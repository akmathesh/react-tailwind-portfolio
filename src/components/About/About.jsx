import "./about.css";
import AboutImg from "../../assets/lmgs/about.png";

const About = () => {
  const config = {
    title: "About Me" || "About",
    desc: [
      {
        list: " I build beautiful websites with React.js and Tailwind CSS. And I can handle both sides of web applications (client and server)",
      },
      {
        list: " I am proficient in frontend skills like React.js, Redux ToolKit, Axios, Tailwind CSS, SaSS, NPM Packages, and many more.",
      },
      {
        list: "I know JavaScript-based Node.js and its framework of Express.js and the database, I know NoSQL of MongoDB and Mongoose.",
      },
    ],
  };

  return (
    <>
      <section id="about" className="flex flex-col items-center h-screen py-8">
        <div className="w-full py-5 lg:py-10 text-center">
          <a href="About" className="text-white text-4xl font-bold">
            {config.title}
          </a>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 px-10 flex justify-center items-center">
            <img className="pb-3 w-80 md:w-96 lg:w-120" src={AboutImg} alt="" />
          </div>
          <div className="lg:w-1/2 px-5 lg:px-20 flex flex-col justify-center">
            <div className="p-5 lg:p-10 rounded text-white space-y-4 text-sm lg:text-lg md:max-w-md lg:space-y-8 bg-gradient-to-tr from-rose-500 to-indigo-500 ">
              {config.desc.map((d, i) => (
                <p className="-tracking-tighter text-justify" key={i}>
                  {d.list}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
