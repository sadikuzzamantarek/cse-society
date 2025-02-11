"use server";
import axios from "@/api/axios";
import { cookies } from "next/headers";
export async function AddMemberFunctionality(FormData) {
  "use server";
  const name = FormData.get("name");
  const email = FormData.get("email");
  const universityID = FormData.get("universityID");
  const skills = FormData.get("skills");
  const department = FormData.get("department");
  const batch = FormData.get("batch");
  const whatsapp = FormData.get("whatsapp");
  const designition = FormData.get("designition");
  const photo = FormData.get("photo");
  const cookie = cookies().get("accessToken");
  const option = {
    method: "POST",
    url: "http://127.0.0.1:5000/api/add-member",
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
    console.log(err);
    return {
      status: err.response.status,
      message: err.response.data.message,
    };
  }
}
