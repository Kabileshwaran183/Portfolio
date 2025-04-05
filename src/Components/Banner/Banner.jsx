import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import Left from "./Left";
import RightBanner from "./RightBanner";

const Banner = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="home"
            className={`w-full pt-10 md:pt-20 pb-10 flex flex-col gap-10 max-md:gap-7 xl:gap-0 md:flex-row items-center border-b-[1px] font-titleFont ${
                theme === 'dark' ? 'border-b-black' : 'border-b-gray-200'
            }`}
        >
            <Left />
            <RightBanner />
        </section>
    );
}

export default Banner;