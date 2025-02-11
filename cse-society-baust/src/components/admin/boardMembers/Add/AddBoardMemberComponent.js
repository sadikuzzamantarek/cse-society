import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import { AddBoardMemberForm } from "./AddBoardMemberForm";

const AddBoardMemberComponent = ({ loginChecker, data }) => {
  return (
    <>
      {loginChecker && <ForceLogin />}
      {data && <AddBoardMemberForm />}
    </>
  );
};

export default AddBoardMemberComponent;
