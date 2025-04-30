import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212] py-5">

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">

        {/* Sidebar */}
        <aside className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl w-full md:w-1/3">
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
