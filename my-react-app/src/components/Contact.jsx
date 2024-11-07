import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
    return (<>
        <section className=" text-white" >
            <div className=" flex justify-around ">
                <div className="flex gap-5">
                    <div className="flex items-center">
                        <IoCallOutline size={20} />
                        <p className="pl-2"> +123-456-7890</p>
                    </div>
                    <div className="flex items-center">
                        <HiOutlineMail size={20} />
                        <p className="pl-2">Info@yourdomain.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div>
                        <FaFacebookSquare size={20} />
                    </div>
                    <div>
                        <FaXTwitter size={20} />
                    </div>
                    <div>
                        <GrInstagram size={20} />
                    </div>
                    <div>
                        <FaLinkedin size={20} />
                    </div>
                    <div>
                        <button className="bg-[#01B4ED] py-1 px-1"><i class="fa-regular fa-note-sticky"></i> GET A QOUTE </button>
                    </div>
                </div>
            </div>

        </section>
    </>)

}
export default Contact