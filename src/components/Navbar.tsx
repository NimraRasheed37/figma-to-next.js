'use client';

import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // When scrolled more than 50px
      } else {
        setScrolled(false); // Reset when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-4 md:px-16 lg:px-32 py-4 flex justify-between items-center transition-colors duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="relative flex items-center">
          {/* Jadoo Heading */}
          <Image
            className="relative z-10"
            src="/img/hero/Jadoo-h.png"
            alt="heading"
            width={100}
            height={20}
          />
          {/* Bow-tie Background */}
          <Image
            className="absolute top-[10px] left-[68%] -translate-x-[20%] z-0 w-[39px] h-[17.5px]"
            src="/img/hero/Jadoo-bg.png"
            alt="bow-tie"
            width={39}
            height={17.5}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex pt-2 gap-14 ml-24">
          <li className="navlinks">Destinations</li>
          <li className="navlinks">Hotels</li>
          <li className="navlinks">Flights</li>
          <li className="navlinks">Bookings</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex pt-2 items-center gap-8">
          <button className="navlinks">Login</button>
          <button className="px-6 py-2 border-[#212832] border-2 text-[#212832] rounded-lg hover:bg-[#F1A501]">
            Sign Up
          </button>
          <select className="py-1 rounded-md text-[#212832] font-googleSans text-[17px] font-medium leading-[21.62px] cursor-pointer bg-transparent">
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
          </select>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="sm:hidden flex items-center text-[#212832]"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Links */}
        <ul className="mt-16 px-6 space-y-6">
          <li className="navlinks">Destinations</li>
          <li className="navlinks">Hotels</li>
          <li className="navlinks">Flights</li>
          <li className="navlinks">Bookings</li>
          <li className="navlinks">Login</li>
          <li>
            <button className="w-full px-6 py-2 border-[#212832] border-2 text-[#212832] rounded-lg hover:bg-[#F1A501]">
              Sign Up
            </button>
          </li>
          <li>
            <select className="py-1 w-full rounded-md text-[#212832] font-googleSans text-[17px] font-medium leading-[21.62px] cursor-pointer bg-transparent">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </li>
        </ul>
      </div>

      {/* Overlay (closes sidebar on click) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
