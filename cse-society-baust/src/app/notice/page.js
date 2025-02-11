import NoticeContainerBox from "@/components/notice/NoticeContainerBox";
import React from "react";

const Notice = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <NoticeContainerBox />
        </div>
      </div>
    </section>
  );
};

export default Notice;
