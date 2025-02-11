"use client";
import deleteDataAxios from "@/utils/deleteDataAxios";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const DeleteButtonViewComponent = ({ id, requstUrl, pushUrl, name }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    const check = confirm(`Are you sure you want to delete ${name}`);
    if (check) {
      let loadingToast = toast.loading("Loading");
      const response = await deleteDataAxios(requstUrl, id);
      if (response.status === "200") {
        toast.dismiss(loadingToast);
        toast.success(response.message);
        router.push(`/admin/${pushUrl}`);
        router.refresh();
      } else {
        toast.dismiss(loadingToast);
        toast.error(response.message);
      }
    }
  };
  return (
    <button
      onClick={() => {
        handleDelete(id);
      }}
      href={`#`}
      className="flex flex-row mx-2 justify-center items-center text-base  bg-red-500 p-1 text-black hover:bg-red-800 hover:text-white w-full  px-2"
    >
      <FaTrashAlt className="mr-2" /> Delete
    </button>
  );
};

export default DeleteButtonViewComponent;
