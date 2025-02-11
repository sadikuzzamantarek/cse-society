import Link from "next/link";
import React from "react";
import AdminAdvisorDataList from "./AdminAdvisorDataList";

import { IoArrowForwardCircle } from "react-icons/io5";
const AdminAdvisorComp = () => {
  return (
    <div>
      <Link
        className="my-2 w-[170px] px-5 py-1 bg- text-gray-700 bg-blue-400 hover:bg-blue-600 hover:text-white rounded-sm flex flex-row items-center"
        href={`advisors/add`}
      >
        Add Advisor <IoArrowForwardCircle className="text-2xl ml-2" />
      </Link>
      <AdminAdvisorDataList />
    </div>
  );
};

export default AdminAdvisorComp;
