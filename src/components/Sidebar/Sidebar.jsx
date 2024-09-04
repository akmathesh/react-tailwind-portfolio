const Sidebar = () => {
  const colorCode = "#fadde1";
  const iconsColors = `text-white/75`;
  const classes = `text-3xl ${iconsColors}`;

  const config = [
    {
      classes,
      link: "#home",
      i: "bx bx-home-alt-2",
    },

    {
      classes,
      link: "#about",
      i: "bx bxs-user-pin",
    },
    {
      classes,
      link: "#projects",
      i: "bx bxs-slideshow",
    },
    {
      classes,
      link: "#resume",
      i: "bx bxs-book-reader",
    },
    {
      classes,
      link: "#contact",
      i: "bx bxl-whatsapp",
    },
  ];
  return (
    <section className="">
      <div className="hidden lg:block fixed top-[200px] right-[50px] bg-gradient-to-br from-rose-600 to-purple-600 bg-clip-border h-[350px] rounded-full">
        <div className="h-full flex flex-col px-5 py-5 justify-between">
          {config.map((d, i) => (
            <a key={i} href={d.link} className={d.classes}>
              <p className="hover:text-yellow-300 p-0">
                <i className={`${d.i}`}></i>
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-3/4 lg:hidden border-4 border-white fixed bottom-0 bg-gradient-to-br from-rose-600 to-purple-600 bg-clip-border rounded-full">
          <div className="flex flex-row px-5 py-5 justify-between">
            {config.map((d, i) => (
              <span className="">
                <a key={i} href={d.link} className={d.classes}>
                  <i className={d.i}></i>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
