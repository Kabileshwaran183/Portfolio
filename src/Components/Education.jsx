import EducationCard from "./EducationCard"

const Education = () => {
    return (
        <section
        id="education"
        className="w-full py-20 border-b-[1px] border-b-black scroll-mt-[100px]"
    >
        <div className="max-md:px-4 md:px-7 xl:px-2">
            <div className=" py-5 md:py-9 font-titleFont flex flex-col gap-2 ">
                <p className="text-sm text-designColor tracking-[4px]">2019-2021</p>
                <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </div>
            <div className="mt-2 lgl:mt-8 w-full max-md:h-[310px] h-[100px] border-l-[6px] border-l-black border-opacity-30 flex max-md:flex-col max-md:gap-8 ">
                <EducationCard
                    title="BE-Computer Science and Engineering"
                    des="Mount Zion College of Engineering and Technology"
                    subTitle=" (2021-25)"
                    result="7.64" />
                <EducationCard
                    title="HSC"
                    des="Sri Kalaivani Vidyalaya Matriculation Higher Secondary School"
                    subTitle="(2019-21)"
                    result="90.52%" />
                <EducationCard
                    title="SSLC"
                    des="Sri Kalaivani Vidyalaya Matriculation Higher Secondary School"
                    subTitle="(2017-19)"
                    result="90.2%" />
            </div>
        </div>
        </section>
    )
}
export default Education