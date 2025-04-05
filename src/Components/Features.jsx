import { SiCanva, SiFigma, SiJavascript, SiReact } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FaFigma, FaPython } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";

const Features = () => {
    return (
        <section
            id="features"
            className="w-full py-20 border-b-[1px] border-b-black scroll-mt-[100px]"
        >
            <Title title="Here Internships" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-20">
                <Card title="Web developer"
                    des="Developed a dynamic intranet website for Apollo Hospitals, implementing an
advanced admin panel for unit management, editable URLs, and seamless data
handling, enhancing operational efficiency.
Technology used : Python (Flask), HTML, CSS, JavaScript"
                    logo="/company/apollo.png"
                />
                <Card title="Graphic Designer"
                    des="Create visually appealing marketing materials using Canva and Adobe
Photoshop. Worked closely with customers to ensuring the expected final
products, which improved the overall user experience.
"
                    logo="/company/magnion.png "
                />
                <Card title="Digital Marketing"
                    des="Assisted in various digital marketing initiatives, gaining proficiency with tools
and analytics to measure campaign effectiveness. Conducted keyword
analysis and SEO optimization."
                    logo="/company/plus91.png"
                />
            </div>
        </section>
    );
}

export default Features