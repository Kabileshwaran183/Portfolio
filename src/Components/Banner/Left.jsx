import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
    FaLinkedinIn,
    FaReact,
    FaGithub,
    FaJava,
    FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"

const Left = () => {
    const { theme } = useContext(ThemeContext);
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const textColor = theme === 'dark' ? 'text-fontColor-dark' : 'text-fontColor-light';
    const iconColor = theme === 'dark' ? 'bg-bodyColor-dark/80 hover:bg-bodyColor-dark/60' : 'bg-bodyColor-light/80 hover:bg-bodyColor-light/60';

    return (
        <div className="w-full lgl:w-1/2 flex flex-col mdl:gap-10 xl:gap-14 max-md:gap-7">
            <div className="flex flex-col gap-5">
                <h1 className={`text-3xl md:text-5xl lg:text-4xl font-bold ${textColor}`}>
                    Hi, I'm <span className="dark:text-designColor-dark text-designColor text-5xl capitalize">Kabileshwaran B</span>
                </h1>
                <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold ${textColor}`}>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className={`text-xs md:text-sm lg:text-base xl:text-sm font-bodyFont leading-6 tracking-wide ${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'}`}>
                    I am a final year cse student, currently pursuing my degree at Mount Zion College of Engineering and Technology. I am a passionate coder with a strong foundation in programming languages and web development frameworks. I am eager to learn and grow in the field of technology, and I am excited about the opportunities that lie ahead.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 md:gap-8 xl:gap-5">
                <div>
                    <h2 className={`text-base uppercase mb-4 max-md:text-sm ${textColor}`}>
                        Find me in
                    </h2>
                    <div className="flex flex-col gap-4">
                        <a href="https://github.com/Kabileshwaran183" target="blank">
                            <span className={`bannerIcon ${iconColor}`}>
                                <FaGithub className="xl:w-7 xl:h-7 "/>
                            </span>
                        </a>
                        <a href="https://linkedin.com/in/kabileshwaranB/" target="blank">
                            <span className={`bannerIcon ${iconColor}`}>
                                <FaLinkedinIn className="xl:w-7 xl:h-7"/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center px-4">
                    <div className={`w-px h-full bg-gradient-to-b from-transparent via-white to-transparent ${
                        theme === 'dark' 
                            ? 'opacity-30 hover:opacity-50 shadow-[0_0_5px_rgba(255,255,255,0.3)]' 
                            : 'opacity-60 hover:opacity-80'
                    } transition-all duration-300`}></div>
                </div>
                <div>
                    <h2 className={`text-base uppercase font-titleFont mb-4 max-md:text-sm ${textColor}`}>
                        BEST SKILL ON
                    </h2>
                    <div className="grid-flow-row grid grid-cols-5 gap-4 max-xl:flex max-xl:flex-wrap">
                        <span className={`bannerIcon ${iconColor}`}>
                            <FaJava className="xl:w-9 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <FaReact className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiJavascript className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiHtml5 className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiCss3 className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiTailwindcss className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiFigma className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <FaPython className="xl:w-7 xl:h-7"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;