import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="text-lg mb-4">Social Links</h3>

        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-white text-black p-3 rounded-full hover:scale-105 transition">
            <FaInstagram />
          </button>

          <button className="bg-white text-black p-3 rounded-full hover:scale-105 transition">
            <FaFacebookF />
          </button>

          <button className="bg-white text-black p-3 rounded-full hover:scale-105 transition">
            <FaXTwitter />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
    );
};

export default Footer;