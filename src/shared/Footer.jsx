import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Using Fa6 for the X logo

export default function Footer() {
  return (
    <footer className="bg-[#1a4332] text-white py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>

        {/* Tagline */}
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h3 className="text-lg font-medium">Social Links</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-600/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}