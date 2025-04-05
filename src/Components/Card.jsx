import React, { useContext } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from '../context/themeContext';

const Card = ({ title, des, logo }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`w-full px-9 h-80 py-2 rounded-lg flex items-center transition-all duration-300 group ${
            theme === 'dark' 
                ? 'bg-gradient-to-r from-bodyColor to-[#202327] shadow-card-dark hover:shadow-hover-dark' 
                : 'bg-white shadow-card-light hover:shadow-hover-light border border-gray-100'
        }`}>
            <div className="h-72 overflow-y-hidden">
                <div className="flex h-full flex-col gap-5 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-16 flex flex-col justify-between">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className={`text-xl md:text-2xl font-titleFont font-bold ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                            {title}
                        </h2>
                        <p className={`base truncated ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            {des}
                        </p>
                        <span className="text-2xl text-designColor">
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;