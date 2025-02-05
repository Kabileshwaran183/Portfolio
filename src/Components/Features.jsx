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
            <Title title="Projects" des="What I Do" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                <Card title="React Projects"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    icon={<SiReact/>}
                />
                <Card title="JavaScript Projects"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    icon={<SiJavascript/>}
                />
                <Card title="Python Projects"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    icon={<FaPython/>}
                />
                <Card title="Photoshop Designs"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    icon={<DiPhotoshop/>}
                />
                <Card title="Figma Designs"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    icon={<FaFigma/>}
                />
                <Card title="Canva Designs"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad."
                    icon={<SiCanva/>}
                />
            </div>
        </section>
    );
}

export default Features