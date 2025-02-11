import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import AdminMentorComp from "./AdminMentorComp";

const AdminMentorsView = ({ data, loginChecker }) => {
  return (
    <>
      {loginChecker && <ForceLogin />}

      {data && <AdminMentorComp />}
    </>
  );
};

export default AdminMentorsView;
