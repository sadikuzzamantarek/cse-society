import ForceLogin from "@/components/forceLogin/ForceLogin";
import authorizer from "@/utils/auth";
import React from "react";

const LoginChecker = async ({ children }) => {
  const data = await authorizer();
  console.log(data);
  if (data === true) {
    return <>{children}</>;
  }
  if (data === false) {
    return (
      <>
        <ForceLogin />
      </>
    );
  }
};

export default LoginChecker;
