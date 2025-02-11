import React, { Fragment } from "react";
import getData from "../../../lib/getData";
import Image from "next/image";

const ExclusiveMemberCard = async () => {
  const data = await getData("get-exclusive-members");
  console.log(data);
  return (
    <>
      {data.length < 1 ? (
        <>No Data Found</>
      ) : (
        data.map((exclmbr, i) => {
          const { _id, name, image, designition, phone, department } = exclmbr;
          return (
            <>
              <Fragment key={_id}>
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
                      {`Department Of ${department}`}
                    </h3>
                    <div className="card-actions">
                      <button className="btn btn-primary">View More</button>
                    </div>
                  </div>
                </div>
              </Fragment>
            </>
          );
        })
      )}
    </>
  );
};

export default ExclusiveMemberCard;
