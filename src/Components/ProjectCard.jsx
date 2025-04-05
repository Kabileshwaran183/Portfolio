import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { ThemeContext } from "../context/themeContext";

const ProjectsCard = ({ title, des, src, projLink, gitLink }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full p-4 xl:px-6 h-auto xl:py-8 rounded-xl flex flex-col dark:bg-black dark:bg-opacity-10 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base xl:text-lg font-semibold text-slate-50">
            {title}
          </h3>
          <div className="flex gap-3">
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
              >
                <span className={`text-lg w-9 h-9 rounded-full inline-flex justify-center items-center hover:text-designColor transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-black text-gray-300' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  <BsGithub />
                </span>
              </a>
            )}
            {projLink && (
              <a
                href={projLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <span className={`text-lg w-9 h-9 rounded-full inline-flex justify-center items-center hover:text-designColor transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-black text-gray-300' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  <FaGlobe />
                </span>
              </a>
            )}
          </div>
        </div>

        <p className="text-sm tracking-wide leading-relaxed text-gray-600 hover:text-gray-800 transition-colors duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
