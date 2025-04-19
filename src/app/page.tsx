import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4 my-5">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
