import React, { Fragment } from "react";
import getData from "../../../lib/getData";
import Image from "next/image";

const MentorsCard2 = async () => {
  const data = await getData("get-mentors");
  return (
    <>
      {data.length < 1 ? (
        <>No Data Found</>
      ) : (
        data.map((mentor) => {
          const { _id, name, image, presentPosition, formerPosition, batch } =
            mentor;
          return (
            <Fragment key={_id}>
              <div className="card bg-base-100 w-96 shadow-xl m-2">
                <div className="flex justify-center pt-10">
                  <figure className="px-10 pt-10 w-[170px] h-[170px] rounded-full relative ">
                    <Image src={image} fill={true} className="rounded-full" />
                  </figure>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{name}</h2>
                  <h3 className="text-xl">
                    {/* Designition */}
                    Mentor
                  </h3>
                  <h3 className="text-lg">
                    {/* Batch */}
                    {`CSE ${batch} Batch`}
                  </h3>
                  {presentPosition && (
                    <h3 className="text-md">
                      {/* Present Position */}
                      {presentPosition}
                    </h3>
                  )}
                  {formerPosition && (
                    <h3 className="text-sm">
                      {/* Former Position */}
                      {`Former ${formerPosition}`}
                    </h3>
                  )}
                  <div className="card-actions">
                    <button className="btn btn-primary">View More</button>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })
      )}
    </>
  );
};

export default MentorsCard2;
