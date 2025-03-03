"use client";

import { useState } from "react";
import { Coffee, AtSign, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#D4A373]">
          Contact Us
        </h2>
        <div className="max-w-md mx-auto">
          <div className="coffee-cup">
            <form onSubmit={handleSubmit} className="space-y-6 p-8">
              <div className="relative">
                <Coffee
                  className="absolute top-3 left-3 text-[#D4A373]"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] text-[#EFE7DD] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                  required
                />
              </div>
              <div className="relative">
                <AtSign
                  className="absolute top-3 left-3 text-[#D4A373]"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] text-[#EFE7DD] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
                  required
                />
              </div>
              <div className="relative">
                <MessageSquare
                  className="absolute top-3 left-3 text-[#D4A373]"
                  size={20}
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] text-[#EFE7DD] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4A373] min-h-[100px]"
                  required
                ></textarea>
              </div>
              <div className="relative inline-block w-full">
                <button
                  type="submit"
                  className="w-full bg-[#D4A373] text-black py-2 px-4 rounded-full hover:bg-[#A89F91] transition duration-300 flex items-center justify-center relative z-10"
                >
                  <Send className="mr-2" size={20} />
                  Send
                </button>
                <div className="steam-effect"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
