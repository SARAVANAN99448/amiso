import { GiVacuumCleaner } from "react-icons/gi";
import { IoCallOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";

const Promise = () => {
    const data = [
        { image: <GiVacuumCleaner size={40} />, maintext: "Professional Team", text: "Our time uses a sanitizing solution to wipe down light switches doorknobs." },
        { image: <IoCallOutline size={40} />, maintext: "24/7 Services", text: "We encourage our customers to let us know in advance of an appointment." },
        { image: <SiTicktick size={40} />, maintext: "Service Guarantee", text: "We are telling our team memebers to switch out all cleaning clothes and mopheads." }
    ]

    return (<>
        <section>
            <div className="flex justify-center gap-10  ">
                {
                    data.map(function (data, index) {
                        return (<>
                            <div key={index} className="w-44 md:w-80 text-center ">
                                <div className="flex justify-center ">
                                    <p className="border border-[#C1C1C1] rounded-full p-3 shadow-2xl">{data.image}</p>
                                </div>
                                <div className="md:text-2xl  font-bold">
                                    <h1>{data.maintext}</h1>
                                </div>
                                <div className="text-[#C1C1C1] hidden md:block">
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        </>)
                    })
                }
            </div>
        </section>
    </>)

}
export default Promise