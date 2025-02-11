import fetchPrivateData from "@/utils/fetchPrivateData";
import React from "react";
import AdminCommitteeUpdateFormComp from "./AdminCommitteeUpdateFormComp";

const AdminCommitteeUpdateBase = async ({ params }) => {
  const data = await fetchPrivateData(`get-committee-member?_id=${params.id}`);
  console.log(data.data);
  const {
    teamInformation,
    name,
    email,
    _id,
    designition,
    universityID,
    term,
    level,
    image,
    phone,
    batch,
    department,
  } = data.data;
  return (
    <>
      <AdminCommitteeUpdateFormComp
        _id={_id}
        name={name}
        email={email}
        teamInformation={teamInformation}
        designition={designition}
        universityID={universityID}
        term={term}
        level={level}
        image={image}
        phone={phone}
        batch={batch}
        department={department}
      />
    </>
  );
};

export default AdminCommitteeUpdateBase;
