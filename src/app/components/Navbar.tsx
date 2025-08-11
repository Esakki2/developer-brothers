'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle smooth scrolling for anchor links
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only process anchor links
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (isOpen) setIsOpen(false);
        
        // Set active section
        setActiveSection(targetId || '');
        
        // Scroll to the element with smooth behavior
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  
  // Handle scroll to top button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('');
  };
  
  // Update active section based on scroll position and handle scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll spy for active section
      const sections = ['about', 'highlights', 'works', 'contact'];
      
      // Find the section that is currently in view
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || '';
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
      
      // Handle scroll-to-top button visibility
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#highlights' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container-custom mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white tracking-wide group">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">Developer Brothers</span>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-300 hover:bg-white/10 transition-all duration-200"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex space-x-8">
            {navLinks.map((link) => {
              // Check if this link is active
              const isActive = link.href === '#' ? activeSection === '' : activeSection === link.href.substring(1);
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`transition-all duration-200 font-medium relative group ${isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-black/90 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 border-t border-white/10">
          {navLinks.map((link) => {
            // Check if this link is active
            const isActive = link.href === '#' ? activeSection === '' : activeSection === link.href.substring(1);
            
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${isActive ? 'text-cyan-400 bg-white/5' : 'text-white hover:text-cyan-300 hover:bg-white/5'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
      </nav>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg z-50 transition-all duration-300 transform ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} hover:shadow-cyan-500/50 hover:scale-110`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </>
  );
};

export default Navbar;
