import BoardMemberContainer from "@/components/boardMember/BoardMemberContainer";
import React from "react";

const Board = () => {
  return (
    <section className="container">
      <h3 className="text-black text-2xl text-center">Advisors</h3>
      <BoardMemberContainer />
    </section>
  );
};

export default Board;
