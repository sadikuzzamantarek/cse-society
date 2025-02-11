"use server";

import axios from "@/api/axios";
import React from "react";
import Link from "next/link";

const MentorCount = async () => {
  const data = await axios.get("http://127.0.0.1:5000/api/get-mentors");
  return (
    <div className="h-[250px] w-[250px] bg-yellow-400 flex rounded-lg flex-row items-center p-5">
      <div className="flex items-center flex-col">
        <h3 className="text-[72px]">{data.data.length}</h3>
        <p className="text-lg text-center">Mentors</p>
      </div>
      <div className="">
        <Link className="ml-3 text-xl" href={"/"}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default MentorCount;
