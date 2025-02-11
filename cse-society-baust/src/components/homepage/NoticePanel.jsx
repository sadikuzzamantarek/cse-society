import React from "react";
import NoticeContainer from "./NoticeContainer";

const NoticePanel = () => {
  return (
    <section className="container md:my-[10px]">
      <h3 className="lg:text-2xl font-semibold text-black text-center md:my-2">
        Notice Update
      </h3>
      <div className="my-3">
        <NoticeContainer />
      </div>
    </section>
  );
};

export default NoticePanel;
