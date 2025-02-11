"use client";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import AdminMemberList from "@/components/admin/members/AdminMemberList";
import Footer from "@/components/footer/Footer";
import { useEffect, useState } from "react";
import authorizer from "@/utils/auth";
import ForceLogin from "@/components/forceLogin/ForceLogin";

const AdminMember = () => {
  const [status, setstatus] = useState(null);
  useEffect(() => {
    const data = authorizer();
    data.then((res) => {
      setstatus(res);
    });
  }, []);

  if (status === true) {
    return (
      <>
        <AdminNavbar />
        <div className="px-5">
          <AdminMemberList />
        </div>
        <Footer />
      </>
    );
  }
  if (status === false) {
    return <ForceLogin />;
  }
};

export default AdminMember;
