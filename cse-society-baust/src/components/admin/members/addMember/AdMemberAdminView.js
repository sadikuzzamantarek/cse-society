import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import AddMemberComponent from "./AddMemberComponent";

const AdMemberAdminView = ({ loginChecker, data }) => {
  return (
    <>
      {loginChecker && <ForceLogin />}
      {data && <AddMemberComponent />}
    </>
  );
};

export default AdMemberAdminView;
