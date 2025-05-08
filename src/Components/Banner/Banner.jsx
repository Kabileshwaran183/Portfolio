import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import Left from "./Left";
import RightBanner from "./RightBanner";

const Banner = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            id="home"
            className={`max-sm:px-3 sm:px-5 w-full pt-10 pb-10 flex flex-col gap-10 max-md:gap-7 xl:gap-0 md:flex-row items-center border-b-[1px] font-titleFont ${
                theme === 'dark' ? 'border-b-bodyColor-dark/50' : 'border-b-bodyColor-light/50'
            }`}
        >
            <Left />
            <RightBanner />
        </section>
    );
}

export default Banner;