"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import getDataAxios from "@/utils/getDataAxios";
import deleteDataAxios from "@/utils/deleteDataAxios";
import toast from "react-hot-toast";
const AdminAdvisorDataList = () => {
  const [data, setdata] = useState();
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const response = await getDataAxios(`get-advisors`);
    setdata(response);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [counter]);
  const handleDelete = async (id) => {
    let loadingToast = toast.loading("Loading");
    const response = await deleteDataAxios("delete-advisor", id);
    if (response.status === "200") {
      toast.dismiss(loadingToast);
      toast.success(response.message);
    } else {
      toast.dismiss(loadingToast);
      toast.error(response.message);
    }
    setCounter(counter + 1);
  };
  return (
    <>
      {loading ? "loading" : ""}
      {data?.length > 0 ? (
        <div className="w-full border-collapse border border-slate-500">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-xl text-red-600 text-center">
                <th className="border border-slate-600">Sl No</th>
                <th className="border border-slate-600">Name</th>

                <th className="border border-slate-600">Email</th>
                <th className="border border-slate-600">Department</th>

                <th className="border border-slate-600">View</th>
                <th className="border border-slate-600">Update</th>
                <th className="border border-slate-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* .sort((a,b)=>{return a.batch<b.batch}) */}
              {data?.map((members, i) => {
                const { _id, name, email, department } = members;
                return (
                  <tr className="text-center text-md">
                    <td className="border border-slate-700 text-slate-600">
                      {i + 1}
                    </td>
                    <td className="border border-slate-700 text-slate-600">
                      {name}
                    </td>
                    <td className="border border-slate-700 text-slate-600">
                      {email}
                    </td>
                    <td className="border border-slate-700 text-slate-600">
                      {department}
                    </td>

                    <td className="border border-slate-700 ">
                      {/* <button>View</button> */}
                      <Link
                        href={`advisors/view/${_id}`}
                        className="bg-blue-500 py-2 block"
                      >
                        View
                        {/* Use Button Instead of Link 😎 */}
                      </Link>
                    </td>
                    <td className="border border-slate-700 ">
                      <Link
                        href={`advisors/update/${_id}`}
                        className="bg-orange-400 py-2 block"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="border border-slate-700 ">
                      <button
                        onClick={() => {
                          handleDelete(_id);
                        }}
                        href={"#"}
                        className="bg-red-500 py-2 w-full block"
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
      ) : (
        <div className="text-center">
          <h3 className="text-red-500 text-lg">No Data Found</h3>
        </div>
      )}
    </>
  );
};

export default AdminAdvisorDataList;
