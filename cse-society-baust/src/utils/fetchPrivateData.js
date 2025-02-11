"use server";
import { cookies } from "next/headers";
export default async function fetchPrivateData(url) {
  const cookie = cookies().get("accessToken");
  let response = await fetch(`http://127.0.0.1:5000/api/${url}`, {
    cache: "no-store",
    headers: {
      Cookie: `${cookie.name}=${cookie.value}`,
    },
  });
  response = {
    status: response.status,
    data: await response.json(),
  };
  return response;
}
