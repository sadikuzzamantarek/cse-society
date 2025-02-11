import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import getData from "../../../lib/getData";
import Image from "next/image";

const MemberCard = async () => {
  const data = await getData("get-exclusive-members");
  return (
    <>
      {data.length < 1 ? (
        <>No Data Found</>
      ) : (
        data.map((member) => {
          const {
            _id,
            name,
            universityID,
            image,
            skills,
            department,
            batch,
            designition,
            level,
            term,
          } = member;
          return (
            <Fragment key={_id}>
              {
                // Member Card
              }
            </Fragment>
          );
        })
      )}
    </>
  );
};

export default MemberCard;
