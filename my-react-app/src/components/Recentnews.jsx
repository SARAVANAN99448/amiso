import clean4 from "../assets/images/clean4.jpg"
import clean5 from "../assets/images/clean5.jpg"
import clean6 from "../assets/images/clean6.jpg"
import avatar1 from "../assets/images/avatar1.jpg"
import avatar2 from "../assets/images/avatar2.jpg"
import avatar3 from "../assets/images/avatar3.jpg"
const Recentnews = () => {
    return (<>
        <section className="mt-32  mb-64 md:block hidden">
            <div>
                <div className="flex justify-center items-center">
                    <h1 className="text-xl text-[#C1C1C1]">WHY CHOOSE US</h1>
                </div>
                <div className="flex justify-center items-center mt-2">
                    <h1 className="text-4xl">Recent News</h1>
                </div>
                <div className="flex justify-center items-center mt-2 text-[#C1C1C1]">
                    <p className="text-xl">We specialize in intelligent & effective search and believes in the power of <br /> <span className="px-52">partnership to grow business.</span> </p>
                </div>
            </div>
            <div className="flex mt-10 justify-center gap-10 ">
                <div className="relative ">
                    <img src={clean4} alt="" className="w-72 h-72" />
                </div>
                <div className="absolute left-[16%] top-[670%] w-64 bg-white px-2 py-5 shadow-xl border-blue-500 border-b-2">
                    <div>
                        <p className="text-[#C1C1C1] mb-2">CLEANING</p>
                        <h1 className="text-xl font-bold mb-2">Temporary Ruling issued</h1>
                        <p className="text-[#C1C1C1]">Washla has met the demands of a growing world cleaning tremendous.</p>
                    </div>
                    <div className="flex items-center mt-5">
                        <img src={avatar1} alt="" className="rounded-full w-20" />
                        <div>
                            <h1 className="font-bold">Martha Smith</h1>
                            <p className="text-[#C1C1C1]">Washla CEO</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={clean5} alt="" className="w-72 h-72" />
                </div>
                <div className="absolute top-[670%] w-64  bg-white px-5 py-5 shadow-xl border-blue-500 border-b-2">
                    <div>
                        <p className="text-[#C1C1C1] mb-2">CLEANING</p>
                        <h1 className="text-xl font-bold mb-2">The Expands California</h1>
                        <p className="text-[#C1C1C1]">welcomed and every sed ut perspiciatis unde omnis iste natus.</p>
                    </div>
                    <div className="flex items-center mt-5 ">
                        <img src={avatar2} alt="" className="rounded-full w-20" />
                        <div>
                            <h1 className="font-bold">Laurs Jones</h1>
                            <p className="text-[#C1C1C1]">Accounting</p>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <img src={clean6} alt="" className="w-72 h-72" />
                </div>
                <div className="absolute top-[670%] left-[65%]  w-64 bg-white px-5 py-5 shadow-xl border-blue-500 border-b-2">
                    <div className="">
                        <p className="text-[#C1C1C1] mb-2">CLEANING</p>
                        <h1 className="text-xl font-bold mb-2"> Ruling Issued</h1>
                        <p className="text-[#C1C1C1]">Washla has met the demands of a growing world. The Cleaning.</p>
                    </div>
                    <div className="flex items-center mt-5">
                        <img src={avatar3} alt="" className="rounded-full w-20" />
                        <div>
                            <h1 className="font-bold">Matt Rayn</h1>
                            <p className="text-[#C1C1C1]">Lawyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)

}
export default Recentnews