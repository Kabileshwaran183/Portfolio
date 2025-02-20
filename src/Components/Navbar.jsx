import { navLinksData } from "../Constants/NavData";

const Navbar = () => {
    return (
        <div className="w-full xl:h-24 mdl:h-20 max-md:h-14 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                <img src="ka.png" className="md:w-20 max-md:w-12 mdl:w-28"></img>
            </div>
            <div>
                <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 ">
                    {navLinksData.map(({ _id, title }) => (

                        <li
                            className="text-base font-normal text-gray-400 tracking-wide hover:text-designColor duration-300 group cursor-pointer hover:underline-[red]"
                            key={_id}
                        >
                            {title}
                            
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar