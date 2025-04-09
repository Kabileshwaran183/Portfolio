import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const RightBanner = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative xl:mt-[-110px] lg:mt-[-230px] md:mt-[-280px]">
            <div className="relative w-[200px] md:w-[200px] lg:w-[300px] xl:w-[500px] xl:h-[500px] h-[200px] md:h-[200px] lg:h-[300px] ">
                <img
                    className={`absolute -top-1 left-8 w-full h-full object-contain z-10 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                    src="/prof/black.png"
                    alt="bannerImg"
                />
                <img
                    className={`absolute -top-1 left-8 w-full h-full object-contain z-10 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
                    src="/prof/color.png"
                    alt="bannerImg"
                />
            </div>
            <div className={`absolute -bottom-0 w-[200px] h-[130px] md:w-[200px] md:h-[140px] lg:w-[300px] lg:h-[190px] xl:w-[500px] xl:h-[200px] border-b-2 border-r-2 border-white flex justify-start items-center rounded-lg rounded-tl-[200px] rounded-tr-[50px] ${
                theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#212428] to-designColor opacity-65' 
                    : 'bg-gradient-to-r from-gray-100 to-[#0F172A]/70 opacity-80'
            }`}></div>
        </div>
    );
}

export default RightBanner;