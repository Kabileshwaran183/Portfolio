


const RightBanner = () => {
    return (
        <div className="w-full lgl:w-1/2 flex justify-center items-center relative xl:mt-[-110px] lg:mt-[-160px]">
            <img
                className="w-[300px]  lg:w-[600px] xl:w-[400px] lg:mt-18   z-10"
                src="/kabinew.png"
                alt="bannerImg"
            /><div className="absolute -bottom-0 w-[200px]  h-[200px] xl:w-[401px] xl:h-[240px] lg:w-[300px] lg:h-[300px] bg-gradient-to-r from-[#212428] to-designColor  flex justify-start items-center  rounded-lg opacity-65 rounded-tl-[200px] rounded-tr-[80px] "></div>

        </div>
    );
}

export default RightBanner