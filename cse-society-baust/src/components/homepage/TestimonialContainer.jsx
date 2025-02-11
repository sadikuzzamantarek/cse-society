import React from "react";
import "swiper/css";
const TestimonialContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-3 testimonialContainer rounded-md">
      <img
        src="thumbnail-300-300jpg.jpg"
        className="h-[150px] w-[150px] rounded-full my-2"
        alt=""
      />
      <p className="text-white leading-tight text-center py-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis est
        hic repellendus nemo esse! Quam quisquam dolor fugit temporibus repellat
        iusto dolorum, velit, fugiat eius perspiciatis molestias eveniet
        ducimus?
      </p>
      <h3 className="py-1 text-white font-bold text-xl">John Doe</h3>
      <p className="font-semibold text-md text-gray-300">Designation</p>
    </div>
  );
};

export default TestimonialContainer;
