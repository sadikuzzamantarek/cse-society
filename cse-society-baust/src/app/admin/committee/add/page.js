import AddCommitteeMemberFormComp from "@/components/committee/AddCommitteeMemberFormComp";
import React from "react";
import { Toaster } from "react-hot-toast";

const AddCommitteeMemberPage = () => {
  return (
    <>
      <AddCommitteeMemberFormComp />
      <Toaster />
    </>
  );
};

export default AddCommitteeMemberPage;
