import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";
import React from "react";
import AddMemberForm from "./AddMemberForm";

const AddMemberComponent = () => {
  return (
    <>
      <AdminNavbar />
      <AddMemberForm />
      <Footer />
    </>
  );
};

export default AddMemberComponent;
