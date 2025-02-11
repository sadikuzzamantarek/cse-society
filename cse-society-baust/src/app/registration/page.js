import JoinWithUsFormComponent from "@/components/joinWithUs/JoinWithUsFormComponent";
import React from "react";

const RegistrationPage = () => {
  return (
    <>
      <h3 className="text-black text-2xl text-center">Join With Us</h3>
      <h3 className="text-black text-2xl text-center">
        Registration Deadline will be at: {new Date().toDateString()}
      </h3>

      <div className="flex flex-row">
        <div className="w-1/2 p-4 sticky top-[10px]">
          <p className="text-center text-lg">
            We are thrilled to have you here. Our society is dedicated to
            fostering a vibrant community of computer science enthusiasts at the
            Bangladesh Army University of Science and Technology (BAUST).{" "}
          </p>
          <p className="text-center text-lg">
            By joining us, you will gain access to a network of like-minded
            individuals, exciting events, workshops, and much more. Together, we
            strive to explore the cutting-edge of computer science, collaborate
            on innovative projects, and support each other in our academic and
            professional journeys.
          </p>
        </div>
        <div className="w-1/2 p-4">
          <JoinWithUsFormComponent />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
