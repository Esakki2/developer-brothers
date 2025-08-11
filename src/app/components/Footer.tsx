// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-cyan-500/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">Developer Brothers</h3>
            <p className="text-gray-300 leading-relaxed">
              We build beautiful, functional websites and applications that help
              businesses grow and succeed in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Highlights
                </a>
              </li>
              <li>
                <a
                  href="#works"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-2 transition-all duration-300"></span>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white">Connect</h3>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors bg-black/40 p-3 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors bg-black/40 p-3 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors bg-black/40 p-3 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.instagram.com/developer.brothers/"
                className="text-gray-300 hover:text-cyan-400 transition-colors bg-black/40 p-3 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <FaInstagram size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-sm pt-4">
              Follow us for updates on our latest projects and tech insights.
            </p>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Developer Brothers. All rights
            reserved.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0 flex items-center gap-2">
            Built with <span className="text-red-500 animate-pulse">❤️</span> using <span className="text-cyan-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
