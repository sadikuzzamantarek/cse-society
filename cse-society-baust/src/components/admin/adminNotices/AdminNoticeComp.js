import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import React from "react";
import AdminNoticeList from "./AdminNoticeList";
import Link from "next/link";

const AdminNoticeComp = () => {
  return (
    <>
      <AdminNavbar />
      <Link href={"/admin/notices/add"}>Add Notice</Link>
      <AdminNoticeList />
      <Footer />
    </>
  );
};

export default AdminNoticeComp;
