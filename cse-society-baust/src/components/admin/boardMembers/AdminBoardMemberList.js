import React from "react";
import AdminBoardMemberListComp from "./AdminBoardMemberListComp";
import Link from "next/link";

const AdminBoardMemberList = () => {
  return (
    <section className="container">
      <section className="container">
        <Link
          href={"board-members/add"}
          className="text-black bg-red-400 py-2 px-1 my-2 inline-block"
        >
          Add Board Member
        </Link>
      </section>
      <div className="flex flex-row flex-wrap justify-center">
        <AdminBoardMemberListComp />
      </div>
    </section>
  );
};

export default AdminBoardMemberList;
