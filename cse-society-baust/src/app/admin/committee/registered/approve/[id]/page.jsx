import LoginChecker from "@/app/test/LoginChecker";
import RegistrationApproveDataFetch from "@/components/admin/registration/RegistrationApproveDataFetch";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import React from "react";

const RegistrationApprovalPage = ({ params }) => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <RegistrationApproveDataFetch params={params} />
      <Footer />
    </LoginChecker>
  );
};

export default RegistrationApprovalPage;
