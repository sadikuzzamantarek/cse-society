import React, { Fragment } from "react";
import getData from "../../../lib/getData";
import Image from "next/image";

const BoardMemberCard = async () => {
  const data = await getData("get-advisors");
  console.log(data);

  return (
    <>
      {data.length < 1 ? (
        <>No Data Found</>
      ) : (
        data.map((boardMember) => {
          const {
            _id,
            name,
            email,
            image,
            designition,
            phone,
            department,
            position,
          } = boardMember;
          return (
            <Fragment key={_id}>
              <div className="infoCard md:w-[22%] rounded-xl flex items-center justify-between flex-col m-4">
                {/* <div className="flex flex-col items-center py-3"> */}
                <div className="image h-[150px] w-[150px] relative my-2">
                  <Image src={image} alt={name} fill className="rounded-full" />
                </div>
                <h3 className="text-white font-xl text-center mt-1 text-xl">
                  {name}
                </h3>
                <p className="text-gray-300 font-md text-center my-1">
                  {designition}
                </p>
                <p className="text-gray-300 font-md text-center my-1">
                  {position}
                </p>
                <p className="text-gray-300 font-md text-center my-1">
                  <strong>Department Of <span className="capitalize">{department}</span> </strong>
                </p>
                {/* <p className="text-gray-300 font-md text-center my-1">
                  <strong>Phone: </strong> {phone}
                </p> */}

                <a
                  href={`mailto:${email}`}
                  className="bg-[#c400d7] py-2 px-5 block w-full text-center mx-1 text-white rounded-b-xl"
                >
                  Email
                </a>
              </div>
              {/* </div> */}
            </Fragment>
          );
        })
      )}
    </>
  );
};

export default BoardMemberCard;
