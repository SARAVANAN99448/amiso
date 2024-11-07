import service from "../assets/images/service.jpg"
const Service = () => {
    const data = [
        { icon: <i class="fa-solid fa-hand-sparkles"></i>, maintext: "Home Cleaning", text: "Homes and thoroughly launder them between usage, We give our teams the accusantium doloremque laudantium." },
        { icon: <i class="fa-solid fa-broom"></i>, maintext: "Windows Cleaning", text: "Windows CleaningWe are closely monitoring national, state and local health agencies for the most recent developments." },
        { icon: <i class="fa-solid fa-spray-can-sparkles"></i>, maintext: "Office Cleaning", text: "Follow these tips from the CDC to help prevent the spread of the seasonal flu and respiratory diseases." },
    ]
    return (<>
        <section >
            <div className="h-screen bg-cover bg-center relative md:block hidden" style={{ backgroundImage: `url(${service})` }}>
            <div className="md:flex justify-center hidden ">
                <div className="text-white text-center absolute top-[20%]">
                    <p className="font-bold mb-3 text-xl">WHY CHOOSE US</p>
                    <h1 className="text-black font-bold text-4xl mb-3">Our Great Service</h1>
                    <p className="font-semibold ">Restoring the beauty and freshness of all your upholstered fabrics <br /> and take the wprk out of housework for you.</p>
                </div>
            </div>
            </div>
            
            <div className="md:flex gap-10 justify-center md:absolute top-[350%] left-[10%] md:ml-0 ml-20 ">
                {
                    data.map(function (data, index) {
                        return (<>
                            <div className="text-white bg-blue-500 w-80  p-10 mb-5 " key={index} >
                                <i className="text-4xl ">{data.icon}</i>
                                <h1 className="mt-4 mb-3 text-2xl font-bold ">{data.maintext}</h1>
                                <p className="font-semibold">{data.text}</p>
                            </div>
                        </>)
                    })
                }
            </div>
            
            </section>
        
    </>)

}
export default Service