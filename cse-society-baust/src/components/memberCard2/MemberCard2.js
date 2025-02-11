import React, { Fragment } from "react";
import getData from "../../../lib/getData";
import Image from "next/image";

const MemberCard2 = async () => {
  const data = await getData("get-committee-members");
  return (
    <Fragment>
      {data.length < 1 ? (
        <>No Data Found</>
      ) : (
        <>
          {data.map((committee) => {
            const { image, name, term, level, designition, batch, department } =
              committee;
            return (
              <>
                <div className="card bg-base-100 w-96 shadow-xl m-2">
                  <div className="flex justify-center pt-10">
                    <figure className="px-10 pt-10 w-[170px] h-[170px] rounded-full relative ">
                      <Image src={image} fill={true} className="rounded-full" />
                    </figure>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    {/* Information Container */}

                    <h3 className="text-xl">
                      {/* Designition */}
                      {designition}
                    </h3>
                    <h3 className="text-lg">
                      {/* Batch */}
                      {`${batch} Batch`}
                    </h3>
                    <h3 className="text-lg">
                      {/* Department */}
                      Department of{" "}
                      <span className="uppercase">{department}</span>
                    </h3>
                    <span className="flex text-lg flex-row justify-center">
                      <h3 className="mx-3">
                        {/*  Level*/}
                        {`Level ${level}`}
                      </h3>
                      <h3 className="mx-3">
                        {/* Term */}
                        {`Term ${term}`}
                      </h3>
                    </span>
                    <div className="card-actions">
                      <button className="btn btn-primary">View More</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </Fragment>
  );
};

export default MemberCard2;
