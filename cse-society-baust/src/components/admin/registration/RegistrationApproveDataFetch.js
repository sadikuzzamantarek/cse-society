import fetchPrivateData from "@/utils/fetchPrivateData";
import React from "react";
import RegistrationApprovalFormComp from "./RegistrationApprovalFormComp";

const RegistrationApproveDataFetch = async ({ params }) => {
  const data = await fetchPrivateData(
    `get-committee-registration?_id=${params.id}`
  );
  console.log(data.data);
  const {
    _id,
    name,
    email,
    universityID,
    fieldOfInterest,
    department,
    batch,
    level,
    term,
    designition,
    createdAt,
    image,
    phone,
  } = data.data;
  return (
    <>
      <RegistrationApprovalFormComp
        _id={_id}
        name={name}
        email={email}
        universityID={universityID}
        fieldOfInterest={fieldOfInterest}
        department={department}
        batch={batch}
        level={level}
        term={term}
        designition={designition}
        image={image}
        phone={phone}
      />
    </>
  );
};

export default RegistrationApproveDataFetch;
