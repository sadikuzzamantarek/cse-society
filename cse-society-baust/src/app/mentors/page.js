import MentorsContainer from "@/components/mentors/MentorsContainer";
import React from "react";

const page = () => {
  return (
    <section>
      <h3 className="text-black font-bold text-2xl text-center">Mentors</h3>
      <div className="flex justify-center">
        <MentorsContainer />
      </div>
    </section>
  );
};

export default page;
