import Image from "next/image";
import getData from "../../../lib/getData";
import Link from "next/link";
const NoticeContainerBox = async () => {
  const data = await getData("get-notices");
  return data.map((notice) => {
    const { _id, title, subtitle, thumbnail } = notice;
    return (
      <div className="p-4 md:w-1/3" key={_id}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="lg:h-48 md:h-36 w-full object-cover object-center relative">
            <Image
              // className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={thumbnail}
              alt={title}
              fill
            />
          </div>
          <div className="p-6 bg-blue-500">
            <h1 className="text-white text-lg font-medium mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{subtitle}</p>
            <div className="flex items-center flex-wrap ">
              <Link href={`/notice/${_id}`}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default NoticeContainerBox;
