import clean1 from "../assets/images/clean1.jpg"
import clean2 from "../assets/images/clean2.jpg"
import clean3 from "../assets/images/clean3.jpg"
const Team = () => {
    return (<>
        <section>
            <div className="flex justify-center mt-20">
                <div className="text-center">
                    <p className="text-[#C1C1C1] font-bold mb-1">MEET OUR</p>
                    <h1 className="text-4xl font-bold mb-1">Our Team</h1>
                    <p className="font-semibold text-[#C1C1C1]">The member of our highly experienced team is dedicated to providing you <br /> with only the best service we can possibly provide.</p>
                </div>
            </div>
            <div className="md:flex justify-center gap-10 mt-10 mb-20 ">
                <div className="relative md:block flex justify-center mb-5">
                    <img src={clean1} alt="" className="h-72 w-72" />
                </div>
                <div className="absolute left-[85px] top-[4110px] md:top-[470%] md:left-[17%] bg-white text-center py-5 px-10 ">
                    <h1 className="text-xl font-bold">Monica Gordon</h1>
                    <p className="text-[#C1C1C1]">House cleaning</p>
                </div>
                <div className="relative md:block flex justify-center mb-5">
                    <img src={clean2} alt="" className="h-72 w-72" />
                </div>
                <div className="absolute md:top-[470%] top-[4400px] left-[26%] md:left-[43%]  bg-white text-center py-5 px-10">
                    <h1 className="text-xl font-bold">Laura Jones</h1>
                    <p className="text-[#C1C1C1]">Cleaner</p>
                </div>
                <div className="relative md:block flex justify-center mb-5">
                    <img src={clean3} alt="" className="h-72 w-72" />
                </div>
                <div className="absolute left-[26%] md:left-[68%] top-[4720px] md:top-[470%] bg-white text-center py-5 px-10 ">
                    <h1 className="text-xl font-bold">Sara Ryan</h1>
                    <p className="text-[#C1C1C1]">House cleaner</p>
                </div>
            </div>
        </section>
    </>)

}
export default Team