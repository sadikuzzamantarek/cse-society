import BackButton from "@/components/ui/BackButton";
import DeleteButtonViewComponent from "@/components/ui/DeleteButtonViewComponent";
import fetchData from "@/utils/fetchData";
import Link from "next/link";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const MemberInformationViewPageAdmin = async ({ params }) => {
  const data = await fetchData(`get-exclusive-member?_id=${params.id}`);
  console.log(data);
  const {
    _id,
    name,
    email,
    designition,
    position,
    phone,
    department,
    image,
    creation,
  } = data;
  return (
    <>
      <BackButton href={`/admin/members`} />
      <h3 className="text-2xl my-2 text-center text-black font-bold">
        Member Information
      </h3>
      <div className="flex justify-center">
        <div className="w-1/3 bg-slate-100 flex flex-col rounded-md p-4 items-center">
          <img src={image} className="w-[150px] h-[150px] rounded-full" />
          <div className="mt-2">
            <h3 className="text-center text-slate-900 text-xl capitalize ">
              {name}
            </h3>
            <h3 className="text-slate-900 text-lg">
              <span className="font-semibold">Email: </span>
              {email}
            </h3>
            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Designition: </span>
              {designition}
            </h3>
            <h3 className="text-slate-900 text-lg">
              <span className="font-semibold">Phone: </span>
              {phone}
            </h3>
            <h3 className="text-slate-900 text-lg">
              <span className="font-semibold">Position: </span>
              {position}
            </h3>
            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Department: </span>
              {department}
            </h3>
            <h3 className="text-slate-900 text-lg capitalize">
              <span className="font-semibold">Added at: </span>
              {creation.toString().slice(0, 10)}
            </h3>
          </div>
          <div className="flex flex-row justify-between my-2 w-full">
            <Link
              href={`/admin/members/update/${_id}`}
              className="flex flex-row w-full mx-2 justify-center items-center text-base bg-blue-500 p-1 text-black hover:bg-blue-800 hover:text-white"
            >
              <FaUserEdit className="mr-2" /> Update
            </Link>
            <DeleteButtonViewComponent
              id={_id}
              name={name}
              requstUrl={`delete-exclusive-member`}
              pushUrl={`members`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberInformationViewPageAdmin;
