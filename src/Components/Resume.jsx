import Title from "./Title";

const Resume = () => {
    return (
        <section
            id="resume"
            className="w-full py-20 border-b-[1px] border-b-black scroll-mt-[100px]"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="RESUME" des="My Qualifications" />
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-3xl flex flex-col items-center gap-8">
                    {/* Image placeholder */}
                    <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
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
                            className="px-6 py-3 bg-designColor text-black rounded-md hover:bg-gray-300 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-designColor text-designColor rounded-md hover:bg-gray-800 transition-colors duration-300"
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

