
import Left from "./Left";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (

        <section
            id="home"
            className="w-full pt-10 md:pt-20 pb-10 flex flex-col gap-10 max-md:gap-7 xl:gap-0 md:flex-row items-center border-b-[1px] font-titleFont border-b-black"
        >
            <Left  />
            <RightBanner />
        </section>

    );
}

export default Banner