"use client";
import React from "react";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
const AdminNavbar = () => {
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
        <div className="menu">
          <Link
            href="/admin/dashboard"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mr-3"
          >
            Home
          </Link>
          <Link
            href="/admin/advisors"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mx-3"
          >
            Advisors
          </Link>
          <Link
            href="/admin/mentors"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mx-3"
          >
            Mentors
          </Link>
          <Link
            href="/admin/members"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mx-3"
          >
            Members
          </Link>
          <Link
            href="/admin/committee"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mx-3"
          >
            Committee
          </Link>
          {/* <Link
            href="/achievement"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mx-3"
          >
            Achievements
          </Link> */}
          <Link
            href="/admin/notices"
            className="text-white font-bold text-xl hover:text-cyan-500 transition mx-3"
          >
            Notice
          </Link>
          <Link href="/login">
            <FaUserTie className="inline text-[30px] text-white hover:text-cyan-500 transition ml-3" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
