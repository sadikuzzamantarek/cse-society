"use server";
import axios from "axios";
import { cookies } from "next/headers";
export async function AddBoardMemberFunctionality(FormData) {
  "use server";
  const cookie = cookies().get("accessToken");
  const option = {
    method: "POST",
    url: "http://127.0.0.1:5000/api/add-advisor",
    headers: {
      "Content-Type": "multipart/form-data",
      Cookie: `${cookie.name}=${cookie.value}`,
    },
    withCredentials: "true",
    data: FormData,
  };

  try {
    const response = await axios.request(option);
    console.log(response.data);
    return {
      status: response.status,
      message: "Member Added Successfully",
    };
  } catch (err) {
    return {
      status: err.response.status,
      message: err.response.data.message,
    };
  }
}
