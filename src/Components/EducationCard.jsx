import React from "react";

const EducationCard = ({ title, subTitle, result, des }) => {
    return (
        <div className="w-full h-[200px] group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 -top-[0.49rem] -left-2 flex justify-center items-center">
                    {result!=7.64 ? <span className="absolute w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[18px] border-t-[#131312f0]  group-hover:border-t-[design-color] transform -rotate-[-90deg] group-hover:border-t-designColor duration-300"></span>
                    :          <span className="absolute w-5 h-5 rounded-full -top-16 -left-1 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>}
                </span>
            </div>
            <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-6 shadow-shadowOne">
                <div className="flex flex-col lgl:flex-row justify-between gap-3 lgl:gap-0 lgl:items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                            {title}
                        </h3>
                        <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className="px-4 py-2 text-designColor group-hover:text-green-400 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                            {result}
                        </p>
                    </div>
                </div>
                <div>
                <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                    {des}
                </p>
                </div>

            </div>
        </div>
    );
};

export default EducationCard;
