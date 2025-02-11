"use client";
import axios from "@/api/axios";
import Link from "next/link";
import React from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
async function getData() {
  const result = await axios.get("http://127.0.0.1:5000/api/get-notices");
  return result.data;
}
const NoticeContainer = async () => {
  const data = await getData();
  return data.map((notice) => {
    const { _id, title, subtitle } = notice;
    return (
      <div
        key={_id}
        className="bg-[#151c28] my-3 p-3 rounded-md text-white flex flex-row items-center w-3/5 border-2 border-gray-200 border-opacity-60"
      >
        <div className="mr-5">
          {<HiOutlineSpeakerphone className="text-[45px]" />}
        </div>
        <div className="w-[380px] mr-2">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="flex flex-row items-center mx-2">
          <FaRegClock className="mr-2" />
          <p>10 hours ago</p>
        </div>
        <div>
          <Link
            href={`#`}
            className="flex items-center mx-4 border-2 py-2 px-3 capitalize hover:border-purple-500 transition"
          >
            <p>Read More</p>
          </Link>
        </div>
      </div>
    );
  });
};

export default NoticeContainer;
