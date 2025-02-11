import React from "react";
import axios from "@/api/axios";
import { cookies } from "next/headers";
import AdminMentorsView from "@/components/admin/adminMentors/AdminMentorsView";
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
      console.log(response.data);
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
const AdminMentors = async () => {
  const data = await getData();

  return (
    <>
      <AdminMentorsView data={data} loginChecker={loginChecker} />
    </>
  );
};

export default AdminMentors;
