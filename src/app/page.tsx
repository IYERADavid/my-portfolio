import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import SideBar from './sidebar';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212] py-5">

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">

        <SideBar />

        {/* Main Content */}
        <section className="w-full md:w-2/3">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl mb-6">
            <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">About Me</h2>
            <p>
              I'm a Full Stack Developer with X years of experience crafting responsive and functional web interfaces.
              Proficient in HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, and MongoDB. I build engaging web apps
              and thrive on solving challenging UI problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#1a1a1a] p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2">Web Development</h3>
              <p>High-quality development of sites at the professional level.</p>
            </div>
            <div className="bg-[#1a1a1a] p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-lg mb-2">Photography</h3>
              <p>I make high-quality photos of any category at a professional level.</p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl mb-6">
            <h2 className="text-xl font-bold border-b border-gray-700 pb-2 mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#111] p-4 rounded-xl">
                <p className="italic">“Your Name is an exceptional developer. Their dedication to detail and design is unmatched.”</p>
                <p className="font-bold mt-2">— Person One</p>
              </div>
              <div className="bg-[#111] p-4 rounded-xl">
                <p className="italic">“Not just a developer, but a creative problem-solver. Highly recommend!”</p>
                <p className="font-bold mt-2">— Person Two</p>
              </div>
            </div>
          </div>

        </section>
      </div>

      </main>
    </>
  );
}
