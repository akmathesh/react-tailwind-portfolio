import React from "react";

const Contact = () => {
  const config = {
    title: "Contact",
    desc: "If you want to discuss more in detail, please reach me out",
    contacts: {
      github: "https://www.github.com/akmathesh",
      email: "mkmathesh@gmail.com",
      phone: "6362736575",
      whatsappChat: "https://wa.me/+916362736575",
    },
  };

  return (
    <>
      <section id="contact" className="w-full pb-40 lg:pb-20 bg-indigo-950">
        <div className="w-3/4  mx-auto ">
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-semibold text-white text-center py-10 lg:py-20">
            {config.title}
          </h1>
          <div className="flex flex-col bg-white/20 p-10 lg:py-12 rounded">
            <div className="space-y-8 text-center">
              <p className="text-gray-300 -tracking-tighter">{config.desc}</p>
              <p className="text-gray-300 -tracking-tighter">
                <span className="font-semibold px-5">Github ID : </span>
                <a
                  target="_blank"
                  className="text-blue-400 text-sm"
                  href="https://www.github.com/akmathesh"
                >
                  {config.contacts.github}
                </a>
              </p>
              <p className="text-gray-300 -tracking-tighter">
                <span className="font-semibold px-5">Email ID : </span>
                {config.contacts.email}
              </p>
              <p className="text-gray-300 -tracking-tighter">
                <span className="font-semibold px-5">Mobile No : </span>
                +91 {config.contacts.phone}
              </p>
              <p className="text-gray-300 -tracking-tighter">
                <span className="font-semibold px-1">For Whatsapp Chat - </span>
                <a
                  href={config.contacts.whatsappChat}
                  target="_blank"
                  className="bg-green-700 text-white px-3 py-2 rounded-full text-sm font-semibold"
                >
                  Click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
