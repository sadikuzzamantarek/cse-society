"use client";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const DeleteButtonOfTable = () => {
  const handleDelete = () => {
    toast.error("Hello");
  
  };
  return (
    <>
      <button
        onClick={() => {
          handleDelete();
        }}
        className="bg-red-500 w-full py-2 block"
      >
        Delete
      </button>
    </>
  );
};

export default DeleteButtonOfTable;
