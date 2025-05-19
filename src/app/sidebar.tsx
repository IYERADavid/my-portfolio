import Image from "next/image";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function SideBar () {
    return (
        <>
            <aside className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl w-full">
            <div className="flex flex-col items-center">
                <Image src="/images/hero.jpg" alt="Avatar" width={100} height={70} className="rounded-full" />
                <h1 className="text-2xl font-bold mt-4">David Iyera</h1>
                <p className="text-sm bg-gray-800 px-3 py-1 rounded-full mt-2">Full Stack Developer</p>
    
                <div className="mt-6 space-y-3 w-full">
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-500" />
                    <span>iyeradavid@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaPhone className="text-yellow-500" />
                    <span>+250 798 697 626</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-yellow-500" />
                    <span>Kigali city, Rwanda</span>
                </div>
                </div>
    
                <div className="flex justify-center mt-6 gap-4 text-xl">
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaGlobe /></a>
                </div>
            </div>
            </aside>
        </>
    )
} 