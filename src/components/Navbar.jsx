import { FaXmark, FaBars } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Project", path: "project" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <>
      <nav
        className=" max-w-screen-xl md:px-8 mx-auto p-4 text-white  fixed top-0 right-0 left-0 bg-[#111]  border-b border-color5 z-50"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        delay="0"
      >
        <div className="text-lg container mx-auto flex justify-between items-center font-medium ">
          {/* desktop display */}
          <div>
            <h1 className="text-2xl font-bold text-color7">Zainul Rifqi</h1>
          </div>
          <div className="flex items-center gap-8">
            <ul className="md:flex space-x-12 hidden text-labelColor ">
              {navItems.map(({ link, path }) => (
                <Link
                  key={link}
                  to={path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={1000}
                  className="block hover:text-color7 hover:font-semibold text-sm font-normal cursor-pointer hover:-translate-y-1 transition-all duration-300"
                >
                  {link}
                </Link>
              ))}
            </ul>
            <div className="space-x-4 hidden md:flex items-center text-color7">
              <a
                to="https://www.linkedin.com/in/zainul-rifqi/"
                target="_blank"
                className="hover:-translate-y-2 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* mobile display */}
          <div className="md:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" text-color7 focus:outline-none hover:text-color9 focus:text-color9 z-50 "
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-color7" />
              ) : (
                <FaBars className="w-6 h-6 text-color7" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`space-y-4 px-4 pt-20 pb-5 bg-[#111111] ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            to={path}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
            className="block text-labelColor font-semibold  hover:text-color7 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
