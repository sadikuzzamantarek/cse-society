"use client";
import React from "react";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
const NavBar = () => {
  return (
    <header className="py-2">
      <div className="navBarBase md:flex md:justify-between md:items-center md:flex-row container">
        <div className="logo">
          <img
            src="/cse-society-loog.png"
            className="lg:w-[100px] md:h-[80px]"
            alt=""
          />
        </div>
        <div className="menu flex flex-row">
          <Link
            href="/"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mr-3"
          >
            Home
          </Link>
          <Link
            href="/advisors"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            Advisors
          </Link>
          <Link
            href="/mentors"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            Mentors
          </Link>
          <Link
            href="/members"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            Members
          </Link>
          <Link
            href="/committee"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            Committee
          </Link>
          <Link
            href="/notice"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            Notice
          </Link>
          <Link
            href="/registration"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            Join Us
          </Link>
          <Link
            href="/test"
            className="text-dark font-bold text-md hover:text-cyan-500 transition mx-3"
          >
            test
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
