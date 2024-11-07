import { MdCleaningServices } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaHandsWash } from "react-icons/fa";
const Box = () => {
    const data =
        [
            { image: <MdCleaningServices size={40} className="text-[#10B6EE]" />, maintext: "Professional Cleaning", text: "Housekepping is responsible for minor security in hostel ecosystem for food and cleaning through." },
            { image: <IoHomeOutline size={40} className="text-[#10B6EE]" />, maintext: "Fast and Efficient", text: "Our aim is to keep the house clean - your aim will help! the through digital innovation world summit" },
            { image: <FaHandsWash size={40} className="text-[#10B6EE]" />, maintext: "Renew your look", text: "Both of us take a lot of time getting cleaned and beautified clean home.professional service" },
        ]
    return (<>
        <section className=" bg-blue-400 md:p-10">
            <div className=" p-10 md:flex gap-10 justify-center md:absolute md:top-[87%] top-[100%] left-[8%]">
                {
                    data.map(function (data, index) {
                        return (
                            <div className="bg-white w-80 h-48 border  p-5 text-center mb-5" key={index}>
                                <div className="flex justify-center">
                                    <p>{data.image}</p>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-xl">{data.maintext}</h1>
                                    <h1 className="text-[#0f0f0f]">{data.text}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>)
}
export default Box