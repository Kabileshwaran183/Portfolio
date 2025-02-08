import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full py-4 h-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-11 gap-8">
            <div className="w-full h-full flex flex-col gap-8 col-span-3">
                <div className="flex justify-center" >
                    <img className="w-28 items-center" src="kabi3.png" alt="logo" />
                </div>
                <div className="flex justify-center gap-4 ">
                    <span className="bannerIcon w-8 h-8">
                        <FaFacebookF />
                    </span>
                    <span className="bannerIcon w-8 h-8">
                        <FaTwitter />
                    </span>
                    <span className="bannerIcon w-8 h-8">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
            <div className="w-full h-full col-span-4">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    Personal Info
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden ">
                    <li> Profession : Student
                    </li>
                    <li> Age       : 21
                    </li>
                    <li> Date of Birth : 01/08/2003
                    </li>
                    <li> Marrial Status : single
                    </li>
                </ul>
            </div>
            <div className="w-full h-full col-span-4">
                <h3 className="text-xl uppercase text-designColor tracking-wider">
                    Hobbies
                </h3>
                <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
                    <li> Playing Chess
                    </li>
                    <li> Watching space related videos and hypothesis - youtube
                    </li>
                    <li> pencil sketching
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer