"use client";
import AddAdvisorFormComp from "@/components/admin/adminAdvisor/AddAdvisorFormComp";
import Footer from "@/components/footer/Footer";
import AdminNavbar from "@/components/navbar/AdminNavbar";

const AddAdvisorAdminComponent = () => {
  return (
    <>
      <AdminNavbar />
      <div className="container">
        <AddAdvisorFormComp />
      </div>
      <Footer />
    </>
  );
};

export default AddAdvisorAdminComponent;
