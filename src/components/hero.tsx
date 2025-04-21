import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold">
                        Hello, I'm David Iyera
                    </h1>
                    <p className="text-gray text-lg lg:text-xl mb-6">
                        I'm a Full Stack Software Engineer with a passion for building
                        innovative and efficient web applications. I specialize in
                        creating seamless user experiences and robust backend systems.
                    </p>
                    <div className="mb-10">
                        <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-400 text-black">Hire Me</button>
                        <button className="px-6 py-3 rounded-full mr-4 bg-black hover:bg-slate-800 text-white border border-white mt-3">Download CV</button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
                        <Image
                            src="/images/hero.jpg"
                            alt="hero"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}