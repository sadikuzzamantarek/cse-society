import Link from "next/link";
import React, { Fragment } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import fetchData from "@/utils/fetchData";
import DeleteButtonViewComponent from "@/components/ui/DeleteButtonViewComponent";

const AdminMentorView = async ({ params }) => {
  const data = await fetchData(`get-mentor?_id=${params.id}`);
  const {
    _id,
    name,
    image,
    email,
    phone,
    presentPosition,
    formerPosition,
    batch,
  } = data;
  return (
    <>
      {/* {data.message ? "No Data" : null} */}
      {data ? (
        <>
          <Link
            className="flex flex-row items-center text-lg text-black bg-blue-500 w-[80px] justify-center p-1 hover:bg-blue-800 hover:text-white"
            href={`/admin/mentors`}
          >
            <IoArrowBackCircle className="mr-1 text-2xl" /> Back
          </Link>
          <h3 className="text-2xl my-2 text-center text-black font-bold">
            Mentor Information
          </h3>
          <div className="flex justify-center">
            <div className="w-1/3 bg-slate-100 flex flex-col rounded-md p-4 items-center">
              <img src={image} className="w-[150px] h-[150px] rounded-full" />
              <div className="mt-2">
                <h3 className="text-center text-slate-900 text-xl capitalize">
                  {name}
                </h3>
                <h3 className="text-slate-900 text-lg">
                  <span className="font-semibold">Email: </span>
                  {email}
                </h3>

                <h3 className="text-slate-900 text-lg">
                  <span className="font-semibold">Phone: </span>
                  {phone}
                </h3>
                <h3 className="text-slate-900 text-lg">
                  <span className="font-semibold">Present position: </span>
                  {presentPosition?.length > 1
                    ? presentPosition
                    : "Not Available"}
                </h3>
                <h3 className="text-slate-900 text-lg capitalize">
                  <span className="font-semibold">Former Position: </span>
                  {formerPosition?.length > 1
                    ? formerPosition
                    : "Not Available"}
                </h3>
                <h3 className="text-slate-900 text-lg capitalize">
                  <span className="font-semibold">Batch: </span>
                  {batch}
                </h3>
              </div>
              <div className="flex flex-row justify-between my-2 w-full">
                <Link
                  href={`/admin/mentors/update/${_id}`}
                  className="flex flex-row mx-2 justify-center items-center text-base bg-blue-500 p-1 text-black hover:bg-blue-800 hover:text-white w-full"
                >
                  <FaUserEdit className="mr-2" /> Update
                </Link>
                <DeleteButtonViewComponent id={_id} name={name} requstUrl={`delete-mentor`} pushUrl={`mentors`} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>No Data Found</>
      )}
    </>
  );
};

export default AdminMentorView;
