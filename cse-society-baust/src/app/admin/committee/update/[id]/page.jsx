import AdminCommitteeUpdateBase from "@/components/admin/AdminCommitteeUpdateBase";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import LoginChecker from "@/utils/LoginChecker";
import React from "react";

const CommitteeUpdatePage = ({ params }) => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <AdminCommitteeUpdateBase params={params} />
      <Footer />
    </LoginChecker>
  );
};

export default CommitteeUpdatePage;
