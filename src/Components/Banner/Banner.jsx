
import Left from "./Left";
import RightBanner from "./RightBanner";

const Banner = () => {
    return (

        <section
            id="home"
            className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
        >   
            <Left />
            <RightBanner />
        </section>

    );
}

export default Banner