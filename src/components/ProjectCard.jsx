const ProjectCard = ({ imgProject, nameProject, iconProject }) => {
  return (
    <div className="max-w-sm rounded  shadow-lg transition duration-300 ease-in-out cursor-pointer bg-color1 p-2 hover:-translate-y-2 ">
      <div className="">
        <img className=" w-96 h-52" src={imgProject} alt="Sample Image" />
      </div>
      <div className="px-2 py-2 text-color7 text-base flex items-center justify-between space-x-2">
        <div>
          <p className="">{nameProject}</p>
        </div>
        <div className="flex space-x-2">{iconProject}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
