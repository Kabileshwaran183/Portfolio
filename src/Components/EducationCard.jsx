import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext"; // adjust path if needed

const EducationCard = ({ title, subTitle, result, des }) => {
    const { theme } = useContext(ThemeContext);

    const isDark = theme === "dark";

    const baseBg = isDark
        ? "bg-black bg-opacity-20 hover:bg-opacity-30"
        : "bg-white bg-opacity-70 hover:bg-white";

    const textPrimary = isDark ? "text-gray-400 group-hover:text-white" : "text-gray-700 group-hover:text-black";
    const textSecondary = isDark ? "text-gray-400 group-hover:text-gray-300" : "text-gray-600 group-hover:text-gray-800";

    const resultStyle = isDark
        ? "text-designColor group-hover:text-green-400 bg-black bg-opacity-25"
        : "text-blue-600 group-hover:text-green-600 bg-gray-100";

    const shadowStyle = isDark ? "shadow-card-dark hover:shadow-hover-dark" : "shadow-card-light hover:shadow-hover-light";

    return (
        <div className="w-full md:h-[150px] xl:h-[200px] group flex">
            {/* Timeline indicator */}
            <div className="w-10 max-md:w-7 h-[4px] bgOpacity mt-12 max-md:mt-6 relative">
                <span className="absolute w-5 h-5 -top-[0.5rem] -left-2 flex justify-center items-center">
                    <span className="absolute w-0 h-0 max-md:border-l-[5px] border-l-[9px] border-l-transparent border-r-[9px] max-md:border-r-[5px] border-r-transparent border-t-[18px] max-md:border-t-[10px] border-t-[#131312f0] group-hover:border-t-designColor transform -rotate-[-90deg] duration-300"></span>
                </span>
               

            </div>

            {/* Card content */}
            <div
                className={`
                    w-full max-md:px-8 ${baseBg} ${shadowStyle}
                    duration-300 rounded-lg md:px-4 lgl:px-10 xl:py-7 md:py-1 py-2
                    flex flex-col justify-center max-md:items-start md:gap-5 lgl:gap-6
                `}
            >
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        <h3 className={`text-xl md:text-[14px] xl:text-xl max-md:text-[12px] z-10 font-semibold leading-tight duration-300 ${textPrimary}`}>
                            {title}
                        </h3>
                        <p className={`text-sm md:text-[11px] xl:text-sm max-md:text-[9px] mt-2 duration-300 ${textPrimary}`}>
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className={`md:px-2 md:py-1 max-md:px-1 xl:px-3 xl:py-2 text-sm md:text-[10px] xl:text-sm max-md:text-[8px] ${resultStyle} max-md:rounded-sm rounded-lg flex justify-center items-center font-medium`}>
                            {result}
                        </p>
                    </div>
                </div>
                <div>
                    <p className={`text-sm md:text-[11px] max-md:text-[9px] xl:text-sm duration-300 leading-tight ${textSecondary}`}>
                        {des}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
