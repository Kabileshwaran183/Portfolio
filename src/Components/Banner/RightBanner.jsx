import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const RightBanner = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative xl:mt-[-110px] lg:mt-[-230px] md:mt-[-280px]">
            <img
                className="w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] xl:mt-18 z-10"
                src="/prof/kabinew.png"
                alt="bannerImg"
            />
            <div className={`absolute -bottom-0 w-[200px] h-[130px] md:w-[200px] md:h-[140px] lg:w-[300px] lg:h-[190px] xl:w-[400px] xl:h-[240px] flex justify-start items-center rounded-lg rounded-tl-[200px] rounded-tr-[80px] ${
                theme === 'dark' 
                    ? 'bg-gradient-to-r from-[#212428] to-designColor opacity-65' 
                    : 'bg-gradient-to-r from-gray-100 to-[#0F172A]/70 opacity-80'
            }`}></div>
        </div>
    );
}

export default RightBanner;