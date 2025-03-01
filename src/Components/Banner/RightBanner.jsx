


const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative xl:mt-[-110px] lg:mt-[-230px] md:mt-[-280px]">
            <img
                className="w-[200px] md:w-[200px] lg:w-[300px] xl:w-[400px] xl:mt-18   z-10"
                src="/kabinew.png"
                alt="bannerImg"
            /><div className="absolute -bottom-0 w-[200px] h-[130px] md:w-[200px] md:h-[140px] lg:w-[300px] lg:h-[190px] xl:w-[401px] xl:h-[240px]  bg-gradient-to-r from-[#212428] to-designColor  flex justify-start items-center  rounded-lg opacity-65 rounded-tl-[200px] rounded-tr-[80px] "></div>

        </div>
    );
}

export default RightBanner