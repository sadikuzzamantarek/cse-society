import axios from "@/api/axios";
import AddNoticeView from "@/components/admin/adminNotices/AddNoticeView";

import { cookies } from "next/headers";
import React from "react";
let loginChecker = false;
const getData = async () => {
  try {
    const cookie = cookies().get("accessToken");
    if (cookie) {
      const response = await axios.get("http://127.0.0.1:5000/api/get-user", {
        headers: {
          Cookie: `${cookie.name}=${cookie.value}`,
        },
      });
      loginChecker = false;
      return response;
    } else {
      loginChecker = true;
    }
  } catch (error) {
    loginChecker = true;
    console.log(error.message);
  }
};
const AdminNotices = async () => {
  const data = await getData();
  return (
    <>
      <AddNoticeView data={data} loginChecker={loginChecker} />
    </>
  );
};

export default AdminNotices;
