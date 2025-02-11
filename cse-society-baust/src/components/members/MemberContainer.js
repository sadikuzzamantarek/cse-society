import React from "react";
import MemberCard from "../memberCard/MemberCard";
import ExclusiveMemberCard from "../exclusiveMemberCard/ExclusiveMemberCard";

const MemberContainer = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <ExclusiveMemberCard />
    </div>
  );
};

export default MemberContainer;
