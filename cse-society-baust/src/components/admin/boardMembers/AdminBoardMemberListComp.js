"use client";

import React, { useEffect, useState } from "react";
import { getDataByAdmin } from "../adminFunctionalities.js/getData";
// const getData = async () => {
//   const response = await axios.get(
//     "http://127.0.0.1:5000/api/get-board-member"
//   );
//   return response.data;
// };

const AdminBoardMemberListComp = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const response = getDataByAdmin("get-board-member");
    response.then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      {data ? "" : <h3 className="text-2xl text-white">Loading</h3>}
      {data &&
        data.map((members) => {
          const { _id, name, email, boardId, designition, whatsapp } = members;
          return (
            <div
              className="w-[48%] flex flex-row items-center border-2 border-gray-400 rounded-md m-2"
              key={_id}
            >
              <div className="p-2 w-1/5 mx-2">
                <img
                  src="/thumbnail-300-300jpg.jpg"
                  className="w-[75px] h-[75px] rounded-full"
                  alt=""
                />
              </div>
              <div className="text-white p-2 w-3/5 text-md">
                <h3>{name}</h3>
                <h3>{designition}</h3>
                <h3>{boardId}</h3>
                <h3>{whatsapp}</h3>
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

export default AdminBoardMemberListComp;
