import hero from "../assets/images/hero.png"
import Contact from "./Contact"
import Navbar from "./Navbar"
const Herosection = () => {
    return (<>
        <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${hero})` }}>
            <div className="absolute w-full pt-3 px-20 top-0 md:block hidden">
                <Contact />
            </div>
            <div className="absolute w-full md:pt-10 md:px-20  md:top-[2%] top-2">
                <Navbar />
            </div>
            <div className="text-white">
                <h1 className=" font-bold absolute top-[27%] left-[10%]">RENEW YOUR LOOK </h1>
                <h1 className="font-bold text-6xl left-[10%] top-[30%] absolute">A TRADITION OF <br /> QUALITY CLEANING</h1>
            </div>
            <div className="absolute md:top-[55%] top-[70%] left-[10%]">
                <button className="text-white border py-3 px-5 font-semibold bg-[#0092D7] "><a href="#contact">Contact Us</a></button>
            </div>
        </section>
        <section>
            <div className="md:flex hidden pt-44 gap-10 bg-blue-400 px-10 text-white  justify-center font-semibold  ">
                <div className="w-80">
                    <h1 className="text-black text-4xl mb-2">A Clean House is a  Happy Place!</h1>
                    <p className="font-bold">Washla has met the demands of a growing  world.</p>
                </div>
                <div className="w-80">
                    <h1>Washla customers have a tremendous opportunity to answer the call of logistic needs across the globe. Has 26 affiliated state soybean associations representing 30 soybean-producing states.</h1>
                </div>
                <div className="w-80">
                    <h1>World’s leading non-asset-based supply chain management companies, we design and implement industry-leading. We specialize in intelligent & effective search and believe in the power of partnerships to grow business.</h1>
                </div>
            </div>
        </section>
    </>)

}
export default Herosection