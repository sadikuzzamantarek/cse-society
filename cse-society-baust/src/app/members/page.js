// 'use client'
import MemberCard from "@/components/memberCard/MemberCard";
import MemberContainer from "@/components/members/MemberContainer";
import React from "react";

const page = () => {
  return (
    <section>
      <h3 className="text-white text-2xl text-center bg-ye">Members</h3>
      <MemberContainer />
    </section>
  );
};

export default page;
