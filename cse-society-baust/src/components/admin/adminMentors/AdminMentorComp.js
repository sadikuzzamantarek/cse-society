import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import React from "react";
import AdminMentorList from "./AdminMentorList";
import Link from "next/link";

const AdminMentorComp = () => {
  return (
    <>
      <AdminNavbar />
      <Link className="bg-red-500 text-xl p-2 my-2 inline-block" href={`mentors/add`}>Add Mentor</Link>

      <AdminMentorList />
      <Footer />
    </>
  );
};

export default AdminMentorComp;
