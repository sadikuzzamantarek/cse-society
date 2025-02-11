import React, { Fragment } from "react";
import getData from "../../../lib/getData";
import Image from "next/image";
const MentorCard = async () => {
  const data = await getData("get-mentors");
  return (
    <>
      {data.length < 1 ? (
        <>No Daata Found</>
      ) : (
        data.map((mentor) => {
          const {
            _id,
            name,
            skills,
            image,
            presentPosition,
            formerPosition,
            batch,
          } = mentor;
          return (
            <Fragment key={_id}>
              <div className="infoCard md:w-[22%] rounded-xl flex items-center justify-between flex-col m-4">
                <div className="top flex flex-col items-center py-3">
                  <div className="image h-[150px] w-[150px]  relative">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-white text-xl text-center mt-2 capitalize">
                    {name}
                  </h3>
                  {presentPosition ? (
                    <p className="text-gray-300  text-md text-center my-1 capitalize">
                      <strong> Present Position:</strong> {presentPosition}
                    </p>
                  ) : (
                    ""
                  )}
                  {formerPosition ? (
                    <p className="text-gray-300 text-center my-1 text-md capitalize">
                      <strong>Former Position:</strong> {formerPosition}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="text-white">
                    <strong>Batch:</strong> {batch}
                  </p>
                </div>
                <div className="skills bg-[#1f1a36] w-full rounded-bl-xl rounded-br-xl pb-2">
                  <h3 className="text-white text-md my-2 px-2">Skills</h3>
                  <ul className="list-none flex flex-wrap">
                    {skills?.map((skill, i) => {
                      return (
                        <li
                          key={i}
                          className="mx-2 px-2 py-1  my-1 text-white text-xs border-2 border-[#7f8a9a] hover:border-[#c400d7] duration-500 uppercase"
                        >
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Fragment>
          );
        })
      )}
    </>
  );
};

export default MentorCard;
