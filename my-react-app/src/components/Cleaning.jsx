import clean from "../assets/images/cleaning.jpg"
import { SiCcleaner } from "react-icons/si";
import { MdCleaningServices } from "react-icons/md";
const Cleaning = () => {
    return (<>
        <section className="mt-10 px-10 ">
            <div className="md:flex relative">
                <div className="md:w-1/2  md:flex justify-center ">
                    <img src={clean} alt="" className="w-full h-96 " />
                </div>

                <div className="md:p-10 p-5 md:pl-14 md:absolute top-10 bg-white left-[40%] z-20 pb-20">
                    <div className="text-[#C1C1C1] font-bold text-xl">
                        <p>MAID FOR YOU </p>
                    </div>
                    <div className="font-bold text-4xl mt-2">
                        <h1>A Cleaner Place is a Safer Place.</h1>
                    </div>
                    <div className="text-[#C1C1C1] font-bold mt-2">
                        <p>Washla cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.</p>
                    </div>
                    <div className="flex mt-10">
                        <div className="w-80">
                            <div className="">
                            <i><SiCcleaner size={40} className="text-blue-700" /></i>
                            </div>
                            <h1 className="text-2xl font-bold">Professional Cleaning</h1>
                            <p className="text-[#C1C1C1]">Housekeeping is responsible for minor security in hotel</p>
                        </div>
                        <div className="w-80">
                            <div className="">
                            <i><MdCleaningServices size={40} className="text-blue-700"/></i>
                            </div>
                            <h1 className="text-2xl font-bold">Fast and Efficent</h1>
                            <p className="text-[#C1C1C1]">Both of us take a lot of time of getting cleaned clean home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)

}
export default Cleaning