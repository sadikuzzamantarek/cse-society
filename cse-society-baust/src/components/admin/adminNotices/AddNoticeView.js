import ForceLogin from "@/components/forceLogin/ForceLogin";
import React from "react";
import AddNoticeForm from "./AddNoticeForm";

const AddNoticeView = ({ data, loginChecker }) => {
  return (
    <>
      {loginChecker && <ForceLogin />}
      {data && <AddNoticeForm />}
    </>
  );
};

export default AddNoticeView;
