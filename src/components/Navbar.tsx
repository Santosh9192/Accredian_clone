"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-white font-bold text-sm">AE</span>
              </div>
              <div>
                <span className="font-bold text-[#11101d] leading-tight text-base">
                  Accredian
                </span>
                <span className="text-[10px] font-medium text-[#1a73e8] -mt-0.5 tracking-wider uppercase block">
                  Enterprise
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1a73e8] rounded-lg hover:bg-blue-50/50 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>



            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-gray-600 rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 w-full bg-gray-600 rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-gray-600 rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 pb-5 pt-2 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1a73e8] rounded-lg hover:bg-blue-50/50 transition-all"
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>
      </header>
    </>
  );
}
