import LoginChecker from "@/app/test/LoginChecker";
import RegistrationPageComponent from "@/components/admin/registration/RegistrationPageComponent";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import React from "react";

const RegistrationPage = () => {
  return (
    <LoginChecker>
      <AdminNavbar />
      <RegistrationPageComponent />
      <Footer />
    </LoginChecker>
  );
};

export default RegistrationPage;
 