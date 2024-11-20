import { FaReact, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/pmrweb.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div
      className="md:px-8 p-4 max-w-screen-xl mx-auto  md:h-screen md:my-8  md:pt-16 md:mt-0 bg-[#111]"
      id="project"
    >
      <div>
        <div
          className="justify-center text-center md:pt-4"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          delay="0"
        >
          <h2 className="md:text-4xl text-2xl font-extrabold text-color7 mb-2">
            Here are all my projects
          </h2>
          <p className="text-labelColor md:w-1/2 text-center mx-auto px-4">
            Showcasing front-end websites, UI designs, and other creative works,
            each project reflects my passion for crafting intuitive and visually
            appealing digital experiences
          </p>
        </div>
        <div>
          <div
            className="flex flex-wrap gap-8 mt-8"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            delay="0"
          >
            <ProjectCard
              imgProject={project1}
              nameProject="Web HR Information System"
              iconProject={
                <>
                  <FaReact />
                  <RiTailwindCssFill />
                </>
              }
            />

            <ProjectCard
              imgProject={project2}
              nameProject="UI Portfolio"
              iconProject={
                <>
                  <FaFigma />
                </>
              }
            />

            <ProjectCard
              imgProject={project3}
              nameProject="Web Portfolio"
              iconProject={
                <>
                  <FaReact />
                  <RiTailwindCssFill />
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
