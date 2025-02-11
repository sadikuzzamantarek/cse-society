import React from "react";
import getDataAxios from "@/utils/getDataAxios";
import UpdateMentorForm from "./UpdateMentorForm";

const UpdateMentorFormWrapper = async ({params}) => {
  const data = await getDataAxios(`get-mentor/?_id=${params.id}`);
  const {
    _id,
    name,
    email,
    image,
    phone,
    presentPosition,
    formerPosition,
    batch,
  } = data;
  return (
    <>
      <h3 className="text-center text-2xl font-bold">Update {data.name}</h3>
      <UpdateMentorForm
        _id={_id}
        name={name}
        email={email}
        image={image}
        phone={phone}
        presentPosition={presentPosition}
        formerPosition={formerPosition}
        batch={batch}
      />
    </>
  );
};

export default UpdateMentorFormWrapper;
