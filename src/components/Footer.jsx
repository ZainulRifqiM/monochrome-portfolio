import { FaLinkedin, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="  max-w-screen-xl mx-auto  rounded-lg shadow m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Zainul Rifqi™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="space-x-4 md:flex  text-color7 flex flex-row items-center mt-3 text-base font-medium">
            <li>
              <a
                href="https://www.instagram.com/zrifqi_m/"
                target="_blank"
                className="hover:-translate-y-4 transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/zain280401"
                target="_blank"
                className="hover:-translate-y-4 transition-all duration-300"
              >
                <FaSquareXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@zae11100"
                target="_blank"
                className="hover:-translate-y-4 transition-all duration-300"
              >
                <FaTiktok />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@zaezain"
                target="_blank"
                className="hover:-translate-y-4 transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/zainul-rifqi/"
                target="_blank"
                className="hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
