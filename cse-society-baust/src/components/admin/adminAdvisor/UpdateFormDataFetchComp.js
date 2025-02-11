import React from "react";
import UpdateAdvisorFormComp from "./UpdateAdvisorFormComp";
import getDataAxios from "@/utils/getDataAxios";

const UpdateFormDataFetchComp = async ({ params }) => {
  const data = await getDataAxios(`get-advisor/?_id=${params.id}`);
  const { _id, name, email, designition, position, phone, department, image } =
    data;
  return (
    <>
      <h3 className="text-center text-2xl font-bold">Update {data.name}</h3>

      <UpdateAdvisorFormComp
        _id={_id}
        name={name}
        email={email}
        department={department}
        designition={designition}
        position={position}
        phone={phone}
        image={image}
      />
    </>
  );
};

export default UpdateFormDataFetchComp;
