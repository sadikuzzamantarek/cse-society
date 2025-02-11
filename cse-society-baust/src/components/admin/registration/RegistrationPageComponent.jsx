"use client";
import deleteDataAxios from "@/utils/deleteDataAxios";
import fetchPrivateData from "@/utils/fetchPrivateData";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const RegistrationPageComponent = () => {
  const [data, setdata] = useState([]);
  const [status, setStatus] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const response = await fetchPrivateData("get-all-committee-registration");
    setdata(response.data);
    setStatus(response.status);
  };
  useEffect(() => {
    getData();
  }, [counter]);
  const handleDelete = async (id) => {
    let loadingToast = toast.loading("Loading");
    setLoading(true);
    const response = await deleteDataAxios("delete-committee-registration", id);
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
      <div className="flex flex-row justify-center">
        <div className="w-full border-collapse border border-slate-500">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-xl text-center">
                <th className="border border-slate-600">Sl No</th>
                <th className="border border-slate-600">Name</th>
                <th className="border border-slate-600">Email</th>
                <th className="border border-slate-600">University ID</th>
                <th className="border border-slate-600">Department</th>

                <th className="border border-slate-600">View</th>
                <th className="border border-slate-600">Update</th>
                <th className="border border-slate-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((members, i) => {
                const { _id, name, email, universityID, department } = members;

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
                      {department}
                    </td>

                    <td className="border border-slate-700 ">
                      <Link
                        href={`registered/view/${_id}`}
                        className="bg-blue-500 py-2 block"
                      >
                        View
                      </Link>
                    </td>
                    <td className="border border-slate-700 ">
                      <Link
                        href={`registered/approve/${_id}`}
                        className="bg-orange-400 py-2 block"
                      >
                        Approve
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
    </>
  );
};

export default RegistrationPageComponent;
