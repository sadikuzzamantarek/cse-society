"use client";
import React, { useEffect, useState } from "react";
import { getDataByAdmin } from "../adminFunctionalities.js/getData";

const AdminNoticeListComp = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const response = getDataByAdmin("get-notices");
    response.then((res) => {
      setData(res);
    });
  }, []);
  return (
    <>
      {data ? "" : <h3 className="text-2xl text-white">Loading</h3>}
      {data &&
        data?.map((members) => {
          const { _id, title, subtitle } = members;
          return (
            <div
              className="w-[48%] flex flex-row items-center border-2 border-gray-400 rounded-md m-2"
              key={_id}
            >
              <div className="text-white p-2 w-4/5 text-md">
                <h3>{title}</h3>
                <h3>{subtitle}</h3>
              </div>
              <div className="w-1/5 p-2 flex flex-col">
                <button className="bg-red-500 my-1">Update</button>
                <button className="my-1 bg-red-500">Delete</button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AdminNoticeListComp;
