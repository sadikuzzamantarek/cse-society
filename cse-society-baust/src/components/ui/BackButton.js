import Link from "next/link";
import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
const BackButton = ({href}) => {
  return (
    <Link
      className="flex flex-row items-center text-lg text-black bg-blue-500 w-[80px] justify-center p-1 hover:bg-blue-800 hover:text-white"
      href={href}
    >
      <IoArrowBackCircle className="mr-1 text-2xl" /> Back
    </Link>
    
  );
};

export default BackButton;
