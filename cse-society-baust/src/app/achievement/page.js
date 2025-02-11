import AchievementContainerMain from "@/components/achievement/AchievementContainerMain";
import React from "react";

const page = () => {
  return (
    <section className="container">
      <h3 className="text-white text-2xl text-center">Achievement</h3>
      <p className="text-white text-sm leading-tight py-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore
        quidem obcaecati ab! Perferendis commodi neque sunt praesentium
        recusandae fuga. Optio aliquid sit officia necessitatibus inventore
        tenetur at? Nobis, perferendis.
      </p>
      <div className="achievementContainer">
        <AchievementContainerMain />
      </div>
    </section>
  );
};

export default page;
