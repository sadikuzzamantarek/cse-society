"use server";
import axios from "@/api/axios";
import { cookies } from "next/headers";

export default async function authorizer() {
  const cookie = cookies().get("accessToken");
  try {
    if (cookie) {
      const response = await axios.get("http://localhost:5000/api/get-user", {
        headers: {
          Cookie: `${cookie.name}=${cookie.value}`,
        },
      });
      // console.log(response.st);
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  } catch (error) {
    console.log(error.message);
  }
}
