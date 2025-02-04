import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaReact,
    FaGithub,
    FaJava,
    FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"
const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Kabileshwaran</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I use animation as a third dimension by which to simplify experiences
                    and kuiding thro each and every interaction. I'm not adding motion
                    just to spruce things up, but doing it in ways that.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-14 ">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <a href="https://github.com/Kabileshwaran183" target="blank">
                            <span className="bannerIcon">
                                <FaGithub />
                            </span>
                        </a>
                        <a href="https://github.com/noorjsdivs/portfolioone" target="blank">
                            <span className="bannerIcon">
                                <FaLinkedinIn />
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4 ">
                        BEST SKILL ON
                    </h2>
                    <div className="grid-flow-row grid grid-cols-5 gap-4">
                    <span className="bannerIcon">
                            <FaJava />
                        </span>
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiJavascript />
                        </span>
                        <span className="bannerIcon">
                            <SiHtml5 />
                        </span>
                        <span className="bannerIcon">
                            <SiCss3 />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                        <span className="bannerIcon">
                            <FaPython />
                        </span>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBanner