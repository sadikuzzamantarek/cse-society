import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
import AdvisorDeleteButton from "../adminAdvisor/AdvisorDeleteButton";
import fetchPrivateData from "@/utils/fetchPrivateData";
const RegistrationViewComp = async ({ params }) => {
  const data = await fetchPrivateData(
    `get-committee-registration?_id=${params.id}`
  );
  const {
    _id,
    name,
    email,
    universityID,
    fieldOfInterest,
    department,
    batch,
    level,
    term,
    createdAt,
    image,
    phone,
  } = data.data;
  return (
    <>
      {data.status === 200 ? (
        <div className="flex justify-center">
          <div className="w-1/3 bg-slate-100 flex flex-col rounded-md p-4 items-center ">
            <img src={image} className="w-[150px] h-[150px] rounded-full" />
            <div className="mt-2">
              <h3 className="text-center text-slate-900 text-xl capitalize">
                {name}
              </h3>
              <h3 className="text-slate-900 text-lg">
                <span className="font-semibold">Email: </span>
                {email}
              </h3>
              <h3 className="text-slate-900 text-lg capitalize">
                <span className="font-semibold">ID: </span>
                {universityID}
              </h3>
              <h3 className="text-slate-900 text-lg">
                <span className="font-semibold">Phone: </span>
                {phone}
              </h3>
              <h3 className="text-slate-900 text-lg">
                <span className="font-semibold">Field Of Interest: </span>
                {fieldOfInterest}
              </h3>
              <h3 className="text-slate-900 text-lg capitalize">
                <span className="font-semibold">Department: </span>
                {department}
              </h3>
              <div className="flex flex-wrap flex-row justify-between">
                <h3 className="text-slate-900 text-lg capitalize">
                  <span className="font-semibold">Batch: </span>
                  {batch}
                </h3>
                <h3 className="text-slate-900 text-lg capitalize">
                  <span className="font-semibold">Level: </span>
                  {level}
                </h3>
                <h3 className="text-slate-900 text-lg capitalize">
                  <span className="font-semibold">Term: </span>
                  {term}
                </h3>
              </div>
              <h3 className="text-slate-900 text-lg capitalize">
                <span className="font-semibold">Registered At: </span>
                {createdAt?.slice(0, 10)}
              </h3>
            </div>
            <div className="flex flex-row justify-between my-2 w-full">
              <Link
                href={`/admin/advisors/update/${_id}`}
                className="flex flex-row px-2 mx-2 justify-center items-center text-base bg-blue-500 p-1 text-black hover:bg-blue-800 hover:text-white w-full"
              >
                <FaUserEdit className="mr-2" /> Update
              </Link>
              <AdvisorDeleteButton id={_id} />
            </div>
          </div>
        </div>
      ) : (
        "No Data Found"
      )}
    </>
  );
};

export default RegistrationViewComp;
