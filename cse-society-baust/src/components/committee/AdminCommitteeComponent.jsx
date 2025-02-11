"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoPersonAddSharp } from "react-icons/io5";
import deleteDataAxios from "@/utils/deleteDataAxios";
import getDataAxios from "@/utils/getDataAxios";
import toast from "react-hot-toast";

const AdminCommitteeComponent = () => {
  const [data, setdata] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const response = await getDataAxios("get-committee-members");
    setdata(response);
  };
  useEffect(() => {
    getData();
  }, [counter]);
  const handleDelete = async (id) => {
    let loadingToast = toast.loading("Loading");
    setLoading(true);
    const response = await deleteDataAxios("delete-committee-member", id);
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
    <>
      <div className="flex flex-wrap flex-row justify-between">
        <div className="my-2 inline-block">
          <Link
            href={`committee/add`}
            target="_blank"
            className="px-5 py-2 bg-blue-400 flex text-md text-black font-semibold hover:bg-blue-600 hover:text-white flex-row items-center"
          >
            Add Comittee Member <IoPersonAddSharp className="ml-2 text-xl" />
          </Link>
        </div>
        <div className="my-2 inline-block ">
          <Link
            href={`committee/registered`}
            target="_blank"
            className="px-5 py-2 bg-purple-500 flex text-md text-black font-semibold hover:bg-blue-600 hover:text-white flex-row items-center"
          >
            Committee Registration <IoPersonAddSharp className="ml-2 text-xl" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="w-full border-collapse border border-slate-500">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-xl text-center">
                <th className="border border-slate-600">Sl No</th>
                <th className="border border-slate-600">Name</th>
                <th className="border border-slate-600">Email</th>
                <th className="border border-slate-600">University ID</th>
                <th className="border border-slate-600">Designition</th>

                <th className="border border-slate-600">View</th>
                <th className="border border-slate-600">Update</th>
                <th className="border border-slate-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((members, i) => {
                const { _id, name, email, universityID, designition } = members;

                return (
                  <tr className="text-center text-md">
                    <td className="border border-slate-700 text-black">
                      {i + 1}
                    </td>
                    <td className="border border-slate-700 text-black">
                      {name}
                    </td>
                    <td className="border border-slate-700 text-black">
                      {email}
                    </td>
                    <td className="border border-slate-700 text-black">
                      {universityID}
                    </td>
                    <td className="border border-slate-700 text-black">
                      {designition}
                    </td>

                    <td className="border border-slate-700 ">
                      <Link
                        href={`committee/view/${_id}`}
                        className="bg-blue-500 py-2 block"
                      >
                        View
                      </Link>
                    </td>
                    <td className="border border-slate-700 ">
                      <Link
                        href={`committee/update/${_id}`}
                        className="bg-orange-400 py-2 block"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="border border-slate-700 ">
                      <button
                        href={"#"}
                        className="bg-red-500 py-2 block w-full"
                        onClick={() => {
                          handleDelete(_id);
                        }}
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
        </div>
      </div>
      ;
    </>
  );
};

export default AdminCommitteeComponent;
