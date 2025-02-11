"use server";
import React from "react";
import MemberCount from "./MemberCount";
import BoardMemberCount from "./BoardMemberCount";
import MentorCount from "./MentorCount";
import NoticeCount from "./NoticeCount";
import fetchData from "@/utils/fetchData";

const Counter = async () => {
  return (
    <section className="container flex flex-row justify-between items-center px-2">
      <MemberCount />
      <BoardMemberCount />
      <MentorCount />
      <NoticeCount />
    </section>
  );
};

export default Counter;
