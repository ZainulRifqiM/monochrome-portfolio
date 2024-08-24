import banner from "../assets/imgBanner.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      className="md:px-8 p-4 max-w-screen-xl mx-auto  md:h-screen content-center mt-4  pt-10 md:pt-16 md:mt-0 bg-[#111]"
      id="home"
    >
      <div className="flex flex-col md:flex-row-reverse  items-center space-y-4 md:space-y-0 md:gap-20 mx-auto">
        <div
          className="md:w-2/5 items-center  justify-center"
          style={{ textAlign: "-webkit-center" }}
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          delay="0"
        >
          <img src={banner} alt="" className="lg:h-[500px] h-auto" />
        </div>
        <div
          className="md:w-3/5 md:space-y-8"
          data-aos="zoom-in-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          delay="0"
        >
          <h2 className="md:text-5xl text-2xl font-bold   leading-relaxed text-color7">
            Hello, I&apos;m
          </h2>
          <h2 className="md:text-5xl text-2xl font-bold    leading-relaxed text-color7">
            Zainul Rifqi
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm a Fresh Graduate",
              2500, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm a Junior Front-end Developer",
              2500,
              "I'm a Junior UI Designer",
              2500,
            ]}
            wrapper="span"
            speed={40}
            className="md:text-3xl text-lg md:font-semibold font-bold  leading-relaxed bg-gradient-to-r  from-color9 to-color3 inline-block text-transparent bg-clip-text mb-4 md:mb-0"
            repeat={Infinity}
          />

          <p className="text-labelColor md:text-base font-light  text-justify md:text-left ">
            An aspiring tech professional, learning by doing and constantly
            seeking new experiences and insights. I&apos;m in the early stages
            of my journey, eager to grow, experiment, and build a strong
            foundation in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
