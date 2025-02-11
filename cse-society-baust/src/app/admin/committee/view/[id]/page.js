import BackButton from "@/components/ui/BackButton";
import fetchPrivateData from "@/utils/fetchPrivateData";
import React from "react";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const CommitteeInformationPage = async ({ params }) => {
  const data = await fetchPrivateData(`get-committee-member?_id=${params.id}`);
  const {
    teamInformation,
    _id,
    name,
    universityID,
    email,
    image,
    department,
    batch,
    phone,
    designition,
    level,
    term,
  } = data.data;
  console.log(data)
  return (
    <>
      <BackButton href={`/admin/committee`} />
      <h3 className="text-2xl my-2 text-center text-black font-bold">
        Committee Information
      </h3>
      <div className="flex justify-center">
        <div className="w-1/3 bg-slate-100 flex flex-col rounded-md p-4 items-center ">
          <img src={image} className="w-[150px] h-[150px] rounded-full" />
          <div className="mt-2">
            <h3 className="my-2 text-center text-slate-900 text-xl capitalize">
              {name}
            </h3>
            <h3 className="text-slate-900 text-lg">
              <span className="font-semibold">University ID: </span>
              {universityID}
            </h3>
            <h3 className="text-slate-900 text-lg">
              <span className="font-semibold">Email: </span>
              {email}
            </h3>

            <h3 className="text-slate-900 text-lg">
              <span className="font-semibold">Phone: </span>
              {phone}
            </h3>

            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Department: </span>
              {department}
            </h3>

            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Team: </span>
              {teamInformation.teamName}
            </h3>

            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Rank: </span>
              {teamInformation.rank}{" "}
              <p className="inline-block font-extralight text-sm italic">
                For Sorting purpose only
              </p>
            </h3>
            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Designition: </span>
              {designition}
            </h3>
            <div className="flex flex-row justify-between">
              <h3 className="text-slate-900 text-lg capitalize">
                <span className="font-semibold">Batch: </span>
                {batch}
              </h3>
              <h3 className="text-slate-900 text-lg capitalize">
                <span className="font-semibold">Level: </span>
                {level}
              </h3>
              <h3 className="text-slate-900 text-lg capitalize">
                <span className="font-semibold">Term: </span>
                {term}
              </h3>
            </div>
          </div>
          <div className="flex flex-row justify-between my-2">
            <Link
              href={`#`}
              className="flex flex-row w-[150px] mx-2 justify-center items-center text-base bg-blue-500 p-1 text-black hover:bg-blue-800 hover:text-white"
            >
              <FaUserEdit className="mr-2" /> Update
            </Link>
            <Link
              href={`#`}
              className="flex flex-row w-[150px] mx-2 justify-center items-center text-base  bg-red-500 p-1 text-black hover:bg-red-800 hover:text-white"
            >
              <FaTrashAlt className="mr-2" /> Delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitteeInformationPage;
