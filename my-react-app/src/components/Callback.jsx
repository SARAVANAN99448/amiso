import sponge from "../assets/images/sponge.jpg"
import { FaPlayCircle } from "react-icons/fa";
import { BiSmile } from "react-icons/bi";
import { SiCcleaner } from "react-icons/si";
import { TbCircleDashedNumber1 } from "react-icons/tb";
import { GiMirrorMirror } from "react-icons/gi";
const Callback = () => {
    return (<>
        <section className="h-screen bg-cover bg-center relative shadow-xl md:block hidden" style={{ backgroundImage: `url(${sponge})` }}>
            <div className="text-white  flex justify-center ">
                <div className="absolute text-center top-[30%] z-20">
                    <div className="flex justify-center">
                        <i className="text-blue-500 text-7xl "><FaPlayCircle /></i>
                    </div>
                    <h1 className="mt-4 font-semibold text-xl mb-4">Cleaning your Worries Away</h1>
                    <h1 className="mb-4 text-4xl ">Need help With Cleaning?</h1>
                    <button className="bg-blue-500 px-10 py-3 rounded-md ">Request Call Back</button>
                </div>
            </div>

        </section>
        <section className="md:flex hidden justify-center gap-10 p-10 px-20 shadow-xl absolute top-[570%] left-[12%] z-20 bg-white">
            <div className="flex gap-3">
                <div>
                    <i><BiSmile size={60} className="text-blue-500" /></i>
                </div>
                <div>
                    <h1 className="text-3xl">385</h1>
                    <p className="text-[#C1C1C1]">Happy Customers</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div>
                    <i><SiCcleaner size={60} className="text-blue-500" /></i>
                </div>
                <div>
                    <h1 className="text-3xl">842</h1>
                    <p className="text-[#C1C1C1]">House Cleaned</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div>
                    <i><TbCircleDashedNumber1 size={60} className="text-blue-500" /></i>
                </div>
                <div>
                    <h1 className="text-3xl">489</h1>
                    <p className="text-[#C1C1C1]">Award Received</p>
                </div>
            </div>
            <div className="flex gap-3">
                <div>
                    <i><GiMirrorMirror size={60} className="text-blue-500" /></i>
                </div>
                <div>
                    <h1 className="text-3xl">1344</h1>
                    <p className="text-[#C1C1C1]">Glass Cleaned</p>
                </div>
            </div>
        </section>
    </>)

}
export default Callback