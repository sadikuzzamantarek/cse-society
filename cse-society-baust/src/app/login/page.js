"use client";
import axios from "@/api/axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
let loginStatus = true;

const Login = () => {
  const router = useRouter();
  const loginUser = async (FormData) => {
    const username = FormData.get("username");
    const password = FormData.get("password");
    const setData = (data) => {};

    const options = {
      method: "POST",
      url: "http://localhost:5000/api/admin-login",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: "true",

      data: { username: username, password: password },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        const lorem = response.data;
        console.log(lorem);
        loginStatus = true;
        router.push("/admin/dashboard");
      })
      .catch(function (error) {
        console.error(error);
        loginStatus = false;
      });
  };
  // if (loginState == true) {
  //   router.push("/admin/dashboard");
  // }
  return (
    <>
      <section className="container flex flex-row items-center justify-between h-screen">
        <div className="w-1/2 flex flex-col">
          {/* <img src="/Management-System.png"/>
           */}
          <div className="w-full h-[300px] relative">
            <Image src={"/Management.png"} fill={true} quality={100} />
          </div>
        </div>
        <div className="w-1/2 flex justify-center flex-col items-center">
          <h3 className="text-2xl text-white font-bold text-center my-3">
            Admin Login
          </h3>
          <div className="form w-full sm:w-1/2 lg:w-1/2 bg-[#c6b3ec] p-4 border border-gray-200/50 rounded-md">
            <form
              action={loginUser}
              className="flex flex-col"
              //   onSubmit={submitHandler}
            >
              <label htmlFor="" className="text-[#f0f2f4] my-1">
                Username
              </label>
              <input
                type="text"
                className={`my-2 rounded-md py-2 border-2 hover:border-violet-500 ${
                  loginStatus ? "" : "border-red-500"
                }`}
                name="username"
                id="username"
              />
              <label htmlFor="" className="text-[#f0f2f4] my-1">
                Password
              </label>
              <input
                type="password"
                className="my-2 rounded-md border-2 hover:border-violet-500 py-2"
                name="password"
                id="password"
              />
              <button
                href={`#`}
                // onClick={() => router.push("/admin/dashboard")}
                className=" my-2 rounded-md p-2 w-full bg-red-500 text-center text-[#f0f2f4]"
                // formAction={loginUser}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default Login;
