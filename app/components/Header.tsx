"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu when clicking
    const element = document.getElementById(sectionId);
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
    <header className="fixed top-0 left-0 right-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex flex-col items-start"
            onClick={() => scrollToSection("hero")}
          >
            <span className="text-2xl md:text-3xl font-bold tracking-wider text-[#FAF5EF]">
              Coffee Break Station
            </span>
            <span className="text-sm md:text-base tracking-widest text-[#D4A373]">
              Self Service Espresso Bar
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#EFE7DD] hover:text-[#D4A373] transition duration-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-[#EFE7DD] hover:text-[#D4A373] transition duration-300"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("specials")}
              className="text-[#EFE7DD] hover:text-[#D4A373] transition duration-300"
            >
              Specials
            </button>
            <button
              onClick={() => scrollToSection("iced-drinks")}
              className="text-[#EFE7DD] hover:text-[#D4A373] transition duration-300"
            >
              Iced Drinks
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-[#EFE7DD] hover:text-[#D4A373] transition duration-300"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#EFE7DD] hover:text-[#D4A373] transition duration-300"
            >
              Contact
            </button>
          </nav>
          <button
            className="md:hidden text-[#EFE7DD]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-[#EFE7DD] hover:text-[#D4A373]"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full text-left py-2 text-[#EFE7DD] hover:text-[#D4A373]"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("specials")}
              className="block w-full text-left py-2 text-[#EFE7DD] hover:text-[#D4A373]"
            >
              Specials
            </button>
            <button
              onClick={() => scrollToSection("iced-drinks")}
              className="block w-full text-left py-2 text-[#EFE7DD] hover:text-[#D4A373]"
            >
              Iced Drinks
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left py-2 text-[#EFE7DD] hover:text-[#D4A373]"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-[#EFE7DD] hover:text-[#D4A373]"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
