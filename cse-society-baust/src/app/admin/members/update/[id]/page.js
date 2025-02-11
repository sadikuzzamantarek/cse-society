import UpdateMemberForm from "@/components/admin/members/UpdateMemberForm";
import getDataAxios from "@/utils/getDataAxios";
import React from "react";

const AdminMemberUpdatePage = async ({ params }) => {
  const data = await getDataAxios(`get-exclusive-member/?_id=${params.id}`);
  console.log(data);
  const { _id, name, email, designition, position, phone, department, image } =
    data;
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">Update {data.name}</h3>
      <UpdateMemberForm
        _id={_id}
        name={name}
        email={email}
        designition={designition}
        phone={phone}
        department={department}
        image={image}
      />
    </div>
  );
};

export default AdminMemberUpdatePage;
