import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import SideBar from './sidebar';
import { Dashboard } from './dashboard';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212] py-5">

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">

        <SideBar />

        {/* Main Content */}
        <Dashboard />
      </div>

      </main>
    </>
  );
}
