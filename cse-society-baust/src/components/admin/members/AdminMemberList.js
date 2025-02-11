import React from "react";
import AdminMemberListComponent from "./AdminMemberListComponent";
import Link from "next/link";

const AdminMemberList = () => {
  return (
    <section className="container">
     
        <Link target="_blank" className="text-white my-3 inline-block bg-red-500 py-2 px-5" href={"/admin/members/add"}>Add Member</Link>
    
      <div className="flex flex-row flex-wrap justify-center">
        <AdminMemberListComponent />
      </div>
    </section>
  );
};

export default AdminMemberList;
