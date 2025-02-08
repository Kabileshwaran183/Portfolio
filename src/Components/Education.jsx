import EducationCard from "./EducationCard"

const Education = () => {
    return (
        <section
            id="projects"
            className="w-full pb-52 border-b-[1px] border-b-black"
        >
        <div className="">
            <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <p className="text-sm text-designColor tracking-[4px]">2019-2021</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-2 lgl:mt-8 w-full h-[100px] border-l-[6px] border-l-black border-opacity-30 flex gap-2">
                <EducationCard
                    title="BE-Computer Science and Engineering"
                    des="Mount Zion College of Engineering and Technology"
                    subTitle="2021-25"
                    result="7.64" />
                <EducationCard
                    title="HSC"
                    des="Sri Kalaivani Vidyalaya Matriculation Higher Secondary School"
                    subTitle="2019-21"
                    result="90.52%" />
                <EducationCard
                    title="SSLC"
                    des="Sri Kalaivani Vidyalaya Matriculation Higher Secondary School"
                    subTitle="2017-19"
                    result="90.2%" />
            </div>
        </div>
        </section>
    )
}
export default Education