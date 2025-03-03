"use client";
import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    const header = document.querySelector("header");
    const headerOffset = header?.offsetHeight || 0;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43.jpg-KqA4koEySgZuWfqSBaarYT88NorPMb.jpeg"
          alt="Coffee beans background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[#FAF5EF] mb-4">
            Coffee Break Station
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl tracking-widest text-[#D4A373] font-light mb-4">
            Self Service Espresso Bar
          </p>
          <div className="w-2 h-2 bg-[#D4A373] rounded-full mx-auto"></div>
        </div>
        <p className="text-xl md:text-2xl mb-8 text-[#EFE7DD] font-light tracking-wide">
          Premium coffee, anytime and anywhere
        </p>
        <div className="relative inline-block">
          <button
            onClick={scrollToAbout}
            className="bg-[#D4A373] text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#A89F91] transition duration-300 transform hover:scale-105 relative z-10"
          >
            Learn More
          </button>
          <div className="steam-effect"></div>
        </div>
      </div>
    </section>
  );
}
