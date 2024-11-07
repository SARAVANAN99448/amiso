import logo from "../assets/images/logo.png"
const Footer = () => {
    return (<>
        <footer className="bg-slate-500  py-8 text-[#C1C1C1] md:px-0 px-10" id="contact">
            <div className="container mx-auto flex flex-wrap justify-between items-start">
                <div class="w-full md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center ">
                        <img src={logo} alt="" class="mb-4 w-20" />
                        <p className="font-bold text-4xl  text-black">amiso</p>
                    </div>
                    <p>Washla customers have a tremendous opportunity to answer the call of logistic.</p>
                </div>

                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2 text-black  text-xl">Get In Touch</h3>
                    <p>8273 NW 56th ST Miami, Florida, 33195 United States</p>
                    <p> <a href="#" className="text-blue-600 hover:underline">info@amiso.com</a></p>
                    <p>052 5401 3322</p>
                </div>

                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="font-semibold mb-2  text-black  text-xl">Quick Links</h3>
                    <ul className="list-none flex gap-5">
                        <div>
                            <li><a href="#" className=" hover:underline">Home</a></li>
                            <li><a href="#" className=" hover:underline">About</a></li>
                            <li><a href="#" className=" hover:underline">Services</a></li>
                            <li><a href="#" className=" hover:underline">Team</a></li>
                        </div>
                        <div>
                            <li><a href="#" className=" hover:underline">FAQ</a></li>
                            <li><a href="#" className=" hover:underline">Contact Us</a></li>
                            <li><a href="#" className=" hover:underline">Gallery</a></li>
                            <li><a href="#" className=" hover:underline">Blogs</a></li>
                        </div>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="font-semibold mb-2  text-black text-xl">Our Newsletter</h3>
                    <p>Subscribe to our newsletter to receive the latest news about our services.</p>
                    <div class="flex mt-4">
                        <input type="email" placeholder="Your email address" class="p-2 border border-gray-400 rounded-l w-full" />
                        <button className="bg-blue-600 text-white px-4 rounded-r">Sign Up</button>
                    </div>
                </div>  
            </div>
            <div className="container mx-auto mt-6 border-t pt-4 text-center">
                <p>© 2023 amiso all rights reserved.</p>
                <div class="flex justify-center mt-4">
                    <a href="#" class="text-gray-700 mx-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-gray-700 mx-2"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-gray-700 mx-2"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="text-gray-700 mx-2"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>

    </>)

}
export default Footer