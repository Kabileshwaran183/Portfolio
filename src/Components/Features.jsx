import { SiCanva, SiFigma, SiJavascript, SiReact } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FaFigma, FaPython } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";

const Features = () => {
    return (
        <section
            id="features"
            className="w-full py-10 border-b-[1px] border-b-black"
        >
            <Title title="Here Internships" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                <Card title="Web developer"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    logo="apollo.png"
                />
                <Card title="Graphic Designer"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    logo="magnion.png "
                />
                <Card title="Digital Marketing"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    logo="plus91.png"
                />
            </div>
        </section>
    );
}

export default Features