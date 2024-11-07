import { useState } from "react";
import logo from "../assets/images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    const [navbar, setnavbar] = useState(false)
    return (<>
        <nav className="bg-[#F7F7F7] flex items-center justify-between  md:py-8 md:px-10 px-20 py-5">
            <div className="flex  items-center gap-2">
                <img src={logo} className="w-10" />
                <h1 className="text-4xl font-bold">amiso</h1>
            </div>
            <div>
                <ul className="md:flex gap-5 font-semibold hidden ">
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">PAGES</a></li>
                    <li><a href="">GALLERY</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                {
                    navbar &&
                    <nav className="fixed md:hidden top-[87px]  left-0 w-1/2   bg-[#1EB8EC] z-20">
                        <ul className=" gap-5 font-semibold h-full text-white  flex flex-col w-full   text-center cursor-pointer" onClick={() => { setnavbar(!navbar) }}>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">PAGES</a></li>
                            <li><a href="">GALLERY</a></li>
                            <li><a href="">BLOG</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </nav>
                }
            </div>
            <div className="md:hidden flex items-center justify-center">
                <button onClick={() => { setnavbar(!navbar) }}><GiHamburgerMenu size={30} /></button>
            </div>
        </nav>
    </>)

}
export default Navbar