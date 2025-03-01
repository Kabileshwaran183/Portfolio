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
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col mdl:gap-10 xl:gap-14 max-md:gap-7">
            <div className="flex flex-col gap-5 ">
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Kabileshwaran</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-xs md:text-sm lg:text-base font-bodyFont leading-6 tracking-wide">
                    I use animation as a third dimension by which to simplify experiences
                    and kuiding thro each and every interaction. I'm not adding motion
                    just to spruce things up, but doing it in ways that.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 md:gap-8 xl:gap-14  ">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4 max-md:text-sm">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <a href="https://github.com/Kabileshwaran183" target="blank">
                            <span className="bannerIcon">
                                <FaGithub className="xl:w-7 xl:h-7"/>
                            </span>
                        </a>
                        <a href="https://linkedin.com/in/kabileshwaranB/" target="blank">
                            <span className="bannerIcon">
                                <FaLinkedinIn className="xl:w-7 xl:h-7"/>
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4 max-md:text-sm">
                        BEST SKILL ON
                    </h2>
                    <div className="grid-flow-row grid grid-cols-5 gap-4 max-xl:flex max-xl:flex-wrap">
                    <span className="bannerIcon">
                            <FaJava className="xl:w-9 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <FaReact className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <SiJavascript className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <SiHtml5 className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <SiCss3 className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <SiFigma className="xl:w-7 xl:h-7"/>
                        </span>
                        <span className="bannerIcon">
                            <FaPython className="xl:w-7 xl:h-7"/>
                        </span>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left