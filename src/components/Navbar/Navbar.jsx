import "./Navbar.css";
import Logo from "../../assets/lmgs/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full lg:backdrop-blur-3xl lg:fixed lg:top-0 lg:z-10 bg-white/2 drop-shadow-2xl">
      <div className="container lg:container mx-auto">
        <div className="flex flex-row items-center mx-5">
          <div className="flex justify-center items-center">
            <img src={Logo} className="lg:w-[70px] w-16" alt="logo" />
          </div>
          <div className="mediaIcons ml-auto lg:ml-auto">
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-github"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-meta"></i>
          </div>

          <div className="mx-10 flex justify-center items-center">
            <input
              type="checkbox"
              className="
              bg-slate-700
              appearance-none
            relative
            inline-block
            h-[30px]
            w-[54px]
            rounded-full
            cursor-pointer
            shadow-xl
            transition-all
            after:absolute
            after:w-5
            after:h-5
            after:bg-yellow-500
            after:rounded-full
            after:top-[5px]
            after:left-[4px]
            after:shadow-inner
            after:shadow-orange-800
            after:transition-all
            after:checked:duration-75
            checked:after:shadow-inner
            checked:after:shadow-gray-700
            checked:after:bg-white
            checked:after:translate-x-6
            checked:bg-slate-900
            "
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
