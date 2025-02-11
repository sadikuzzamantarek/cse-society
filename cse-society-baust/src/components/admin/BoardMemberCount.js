import axios from "@/api/axios";
import Link from "next/link";


const BoardMemberCount = async () => {
  const data = await await axios.get("http://127.0.0.1:5000/api/get-advisors");

  return (
    <div className="h-[250px] w-[250px] bg-red-500 flex rounded-lg flex-row items-center p-5">
      <div className="flex items-center flex-col">
        <h3 className="text-[72px]">{data?.data?.length}</h3>
        <p className="text-lg text-center">Advisors</p>
      </div>
      <div className="">
        <Link className="text-xl" href={"/"}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default BoardMemberCount;
