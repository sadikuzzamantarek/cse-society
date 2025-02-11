import Link from "next/link";
import React from "react";

const ForceLogin = () => {
  return (
    <section className="container h-[100vh] flex justify-center items-center">
      <div className="border-2 border-gray-300 h-[400px] w-[400px] flex flex-col items-center justify-center rounded-sm bg-[#151c28]">
        <img src="/stop-sign.png" className="h-[100px] my-2" alt="stop sign" />
        <h3 className="text-red-400 text-center capitalize my-2">
          No ! No! No! Thats not gonna happen.
        </h3>
        <Link
          className="my-2 bg-red-500 py-4 px-8 text-xl rounded-sm"
          href={`/login`}
        >
          Login
        </Link>
      </div>
    </section>
  );
};

export default ForceLogin;
