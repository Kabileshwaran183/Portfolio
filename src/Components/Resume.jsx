import { useContext } from "react";
import Title from "./Title";
import { ThemeContext } from "../context/themeContext";

const Resume = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section
            id="resume"
            className={`w-full py-20 border-b-[1px] pad ${
                theme === 'dark' ? 'border-b-bodyColor-dark/50' : 'border-b-bodyColor-light/50'
            } scroll-mt-[100px]`}
        >
            <div className="flex justify-center items-center text-center">
                <Title title="RESUME" des="My Qualifications" />
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-3xl flex flex-col items-center gap-8">
                    {/* Image placeholder */}
                    <div className={`w-64 h-64 ${
                        theme === 'dark' ? 'bg-bodyColor-dark/80' : 'bg-bodyColor-light/80'
                    } rounded-lg flex items-center justify-center`}>
                    <img
                            src="/others/image.png"
                            alt="Resume"
                            className="w-full h-full object-cover rounded-lg"/>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                        <a 
                            href="/resume.pdf" 
                            download="Kabileshwaran_B.pdf"
                            className="px-6 py-3 bg-designColor dark:bg-designColor-dark text-black rounded-md dark:hover:bg-designColor-dark/80 hover:bg-designColor/80 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`px-6 py-3 border border-designColor dark:border-designColor-dark rounded-md transition-colors duration-300 ${
                                theme === 'dark' 
                                    ? 'text-designColor-dark hover:bg-bodyColor-dark/80' 
                                    : 'text-designColor hover:bg-bodyColor-light/80'
                            }`}
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;

