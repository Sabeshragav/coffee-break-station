"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1E1E1E] text-[#EFE7DD] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D4A373]">
              Coffee Break Station
            </h3>
            <p>Premium coffee, anytime and anywhere</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D4A373]">
              Contact
            </h3>
            <p>Email: info@Coffeebreakstation.cz</p>
            <p>Phone: +420 123 456 789</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#D4A373]">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-[#D4A373] transition duration-300"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="hover:text-[#D4A373] transition duration-300"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="hover:text-[#D4A373] transition duration-300"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#3B2F2F] text-center">
          <p>
            &copy; {new Date().getFullYear()} Coffee Break Station, s.r.o. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
