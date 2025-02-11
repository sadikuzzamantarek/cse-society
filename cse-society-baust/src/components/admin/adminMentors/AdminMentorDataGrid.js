"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import deleteDataAxios from "@/utils/deleteDataAxios";
import getDataAxios from "@/utils/getDataAxios";

const AdminMentorDataGrid = () => {
  const [data, setdata] = useState();
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const response = await getDataAxios("get-mentors");
    setdata(response);
  };
  useEffect(() => {
    getData();
  }, [counter]);
  const handleDelete = async (id) => {
    let loadingToast = toast.loading("Loading");
    setLoading(true);
    const response = await deleteDataAxios("delete-mentor", id);
    if (response.status === "200") {
      toast.dismiss(loadingToast);
      toast.success(response.message);
      setLoading(false);
    } else {
      toast.dismiss(loadingToast);
      toast.error(response.message);
      setLoading(false);
    }
    toast.dismiss(loadingToast);
    setLoading(false);
    setCounter(counter + 1);
  };
  return (
    <div className="w-full border-collapse border border-slate-500">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-xl text-red-600 text-center">
            <th className="border border-slate-600">Sl No</th>
            <th className="border border-slate-600">Name</th>
            <th className="border border-slate-600">Batch</th>
            <th className="border border-slate-600">View</th>
            <th className="border border-slate-600">Update</th>
            <th className="border border-slate-600">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* .sort((a,b)=>{return a.batch<b.batch}) */}
          {data?.map((members, i) => {
            const { _id, name, batch } = members;
            return (
              <tr className="text-center text-md" key={i}>
                <td className="border border-slate-700 text-slate-600">
                  {i + 1}
                </td>
                <td className="border border-slate-700 text-slate-600">
                  {name}
                </td>
                <td className="border border-slate-700 text-slate-600">
                  {batch}
                </td>

                <td className="border border-slate-700 ">
                  {/* <button>View</button> */}
                  <Link
                    href={`mentors/view/${_id}`}
                    className="bg-blue-500 py-2 block"
                  >
                    View
                    {/* Use Button Instead of Link 😎 */}
                  </Link>
                </td>
                <td className="border border-slate-700 ">
                  <Link href={`mentors/update/${_id}`} className="bg-orange-400 py-2 block">
                    Update
                  </Link>
                </td>
                <td className="border border-slate-700 ">
                  <button
                    onClick={() => {
                      handleDelete(_id);
                    }}
                    className="bg-red-500 w-full py-2 block"
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default AdminMentorDataGrid;
