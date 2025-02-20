
import Left from "./Left";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (

        <section
            id="home"
            className="w-full xl:pt-10 max-md:pt-5 mdl:pt-8 pb-10 flex flex-col gap-10 max-md:gap-7 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
        >
            <Left  />
            <RightBanner />
        </section>

    );
}

export default Banner