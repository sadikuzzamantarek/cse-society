import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import React from "react";
import AdminBoardMemberList from "./AdminBoardMemberList";
import Link from "next/link";

const AdminBoardMemberComp = () => {
  return (
    <>
      <AdminNavbar />

      <AdminBoardMemberList />
      <Footer />
    </>
  );
};

export default AdminBoardMemberComp;
