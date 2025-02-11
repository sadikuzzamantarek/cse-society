import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import AdminMemberComp from "./AdminMemberComp";

const AdminMemberView = ({ loginChecker, data }) => {
  return (
    <>
      {loginChecker && <ForceLogin />}

      {data && <AdminMemberComp />}
    </>
  );
};

export default AdminMemberView;
