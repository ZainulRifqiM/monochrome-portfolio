import about from "../assets/about.png";

const About = () => {
  return (
    <div
      className="md:px-8 p-4 max-w-screen-xl mx-auto  md:h-screen content-center  md:pt-16 md:mt-0 bg-[#111]"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="md:w-2/5 items-center  justify-center"
          style={{ textAlign: "-webkit-center" }}
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          delay="0"
        >
          <img src={about} alt="" className="lg:h-[340px] h-auto" />
        </div>
        <div
          className=" text-justify md:text-left  text-base md:w-3/5 items-center"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          delay="0"
        >
          <h2 className="md:text-4xl text-2xl font-bold text-color7 leading-normal">
            About Me :
          </h2>
          <h2 className="md:text-4xl text-2xl font-bold text-color7 mb-5 leading-normal">
            Towards the Future with Ever-Growing Front-End and UI Design Skills
          </h2>
          <p className="text-labelColor text-base mb-7">
            I am an Informatics graduate focused on front-end development. With
            internship experience as a junior front-end developer, I continue to
            hone my skills, particularly in ReactJS and Tailwind CSS. I am also
            proficient in UI design using Figma and have strong office skills,
            including mastery of Microsoft Office. In addition to technical
            skills, I possess strong communication, problem-solving, leadership,
            and teamwork abilities, and I am ready to learn and grow further in
            this field or beyond it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
