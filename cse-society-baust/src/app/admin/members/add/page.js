"use client";
import AddMemberFormComp from "@/components/admin/members/addMember/AddMemberFormComp";
import Link from "next/link";
import { IoArrowBackCircle } from "react-icons/io5";
const AddMemberLayout = () => {
  return (
    <>
      <div className="container">
       <Link href={`/admin/members`} className="flex  flex-row w-[100px] items-center py-2 px-5  bg-blue-400 hover:bg-blue-600 hover:text-white"><IoArrowBackCircle className="mr-2 text-lg"/> Back</Link>
        <AddMemberFormComp />
      </div>
    </>
  );
};

export default AddMemberLayout;
