import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const RightBanner = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
            <div className={`relative w-[200px] md:w-[350px] mdl:w-[450px] md:-top-[250px] lg:-top-[295px] lgl:-top-[245px] xl:-top-[245px] overflow-hidden lg:w-[500px] lgl:w-[550px] xl:w-[650px] xl:h-[650px] h-[200px] md:h-[350px] mdl:h-[450px] lg:h-[500px] lgl:h-[550px] md:absolute z-10 ${theme === 'dark' ? 'md:opacity-75 ':'opacity-95'} `}>
                <img
                    className={`absolute md:-top-[5px]  left-3 w-full h-full object-contain z-10 transition-opacity duration-300 lg:rounded-b-[150px] mdl:rounded-b-[100px] md:rounded-b-[70px] ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                    src="/prof/black.png"
                    alt="bannerImg"
                />
                <img
                    className={`absolute md:-top-[5px]  left-3 w-full h-full object-contain z-10 transition-opacity duration-300 lg:rounded-b-[150px] mdl:rounded-b-[100px] md:rounded-b-[70px] ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                    src="/prof/color.png"
                    alt="bannerImg"
                />
            </div>
            <div className={`absolute  -bottom-0 w-[200px] h-[97px] md:w-[200px] md:h-[140px] lg:w-[300px] lg:h-[190px] xl:w-[500px] xl:h-[200px] border-b-2 border-r-2 border-white flex justify-start items-center rounded-lg rounded-tl-[200px] rounded-tr-[50px] md:hidden ${
                theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#212428] dark:to-designColor-dark to-designColor opacity-65' 
                    : 'bg-gradient-to-r from-gray-100 to-[#0F172A]/70 opacity-80'
            }`}></div>
        </div>
    );
}

export default RightBanner;