import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import AdminNoticeComp from "./AdminNoticeComp";

const AdminNoticeView = ({ data, loginChecker }) => {
  return (
    <>
   
      {loginChecker && <ForceLogin />}

      {data && <AdminNoticeComp />}

      {/* <h4 className="text-white">Hello</h4> */}
    </>
  );
};

export default AdminNoticeView;
