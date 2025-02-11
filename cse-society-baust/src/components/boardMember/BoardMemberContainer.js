import React from "react";
import BoardMemberCard from "./BoardMemberCard";

const BoardMemberContainer = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      <BoardMemberCard />
    </div>
  );
};

export default BoardMemberContainer;
