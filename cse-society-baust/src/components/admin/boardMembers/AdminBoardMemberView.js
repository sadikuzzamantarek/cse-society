import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import AdminBoardMemberComp from "./AdminBoardMemberComp";

const AdminBoardMemberView = ({ data, loginChecker }) => {
  return (
    <>
      {loginChecker && <ForceLogin />}
      {data && <AdminBoardMemberComp />}
    </>
  );
};

export default AdminBoardMemberView;
