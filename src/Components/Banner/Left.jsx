import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
    FaLinkedinIn,
    FaReact,
    FaGithub,
    FaJava,
    FaPython,
    FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiUipath, SiNodedotjs, SiExpress } from "react-icons/si"
import { FcNext } from 'react-icons/fc';
import { DiNodejs } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io5';

const Left = () => {
    const { theme } = useContext(ThemeContext);
    const [text] = useTypewriter({
        words: ["Java Full Stack Enthusiast", "React Developer", "Web Developer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const textColor = theme === 'dark' ? 'text-fontColor-dark' : 'text-fontColor-light';
    const iconColor = theme === 'dark' ? 'bg-bodyColor-dark/80 hover:bg-bodyColor-dark/60' : 'bg-bodyColor-light/80 hover:bg-bodyColor-light/60';

    return (
        <div className="mdl:px-2 max-md:mb-6 w-full lgl:w-1/2 flex flex-col mdl:gap-10 xl:gap-14 gap-6 z-20">
            <div className="flex flex-col gap-3">
                <h1 className={`max-sm:text-2xl text-3xl font-bold ${textColor}`}>
                    Hi, I'm <br></br><span className="dark:text-designColor-dark text-designColor max-mdl:text-3xl mdl:text-4xl lg:text-5xl capitalize">Kabileshwaran B</span>
                </h1>
                <h2 className={`max-sm:text-[18px] text-xl md:text-xl lg:text-2xl font-bold ${textColor}`}>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className={`max-sm:max-w-[90%] opacity-75 max-sm:text-[10px] leading-relaxed text-xs md:text-xs  xl:text-sm font-bodyFont md:leading-6 tracking-wide ${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'}`}>
                    I am a final year cse student, currently pursuing my degree at Mount Zion College of Engineering and Technology. I am a passionate coder with a strong foundation in programming languages and web development frameworks. I am eager to learn and grow in the field of technology, and I am excited about the opportunities that lie ahead.
                </p>
            </div>
            <div className="flex flex-col lgl:flex-row gap-3 md:gap-5">
                <div>
                    <h2 className={`text-base uppercase mb-2 md:mb-4 max-md:text-sm ${textColor}`}>
                        Find me in
                    </h2>
                    <div className="flex xl:flex-col gap-4">
                        <a href="https://github.com/Kabileshwaran183" target="blank">
                            <span className={`bannerIcon ${iconColor}`}>
                                <FaGithub className="lg:w-7 lg:h-7 "/>
                            </span>
                        </a>
                        <a href="https://linkedin.com/in/kabileshwaranB/" target="blank">
                            <span className={`bannerIcon ${iconColor}`}>
                                <FaLinkedinIn className="lg:w-7 lg:h-7"/>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center px-4">
                    <div className={`w-px h-full bg-gradient-to-b from-transparent  to-transparent ${
                        theme === 'dark' 
                            ? 'via-white opacity-30 hover:opacity-50 shadow-[0_0_5px_rgba(255,255,255,0.3)]' 
                            : 'via-black opacity-60 hover:opacity-80'
                    } transition-all duration-300`}></div>
                </div>
                <div>
                    <h2 className={`text-base uppercase font-titleFont mb-2 md:mb-4 max-md:text-sm ${textColor}`}>
                        BEST SKILL ON
                    </h2>
                    <div className="grid-flow-row grid md:absolute lg:relative md:grid-cols-6 gap-6 lgl:col-gap-14 max-md:flex max-xl:flex-wrap">
                        <span className={`bannerIcon ${iconColor}`}>
                            <FaJava className="lg:w-9 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <FaReact className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiTailwindcss className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiNextdotjs className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiJavascript className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <IoLogoNodejs className="lg:w-9 lg:h-9"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiExpress className="lg:w-9 lg:h-9"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiUipath className="lg:w-9 lg:h-9"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiHtml5 className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiCss3 className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <SiFigma className="lg:w-7 lg:h-7"/>
                        </span>
                        <span className={`bannerIcon ${iconColor}`}>
                            <FaPython className="lg:w-7 lg:h-7"/>
                        </span>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;