import React from "react";
import AdminMentorListComp from "./AdminMentorListComp";
import AdminMentorDataGrid from "./AdminMentorDataGrid";

const AdminMentorList = () => {
  return (
    <section className="container">
      <div className="flex flex-row flex-wrap justify-center">
   
    
        <AdminMentorDataGrid />
      </div>
    </section>
  );
};

export default AdminMentorList;
