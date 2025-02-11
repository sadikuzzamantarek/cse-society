"use client";
import { AddBoardMemberFunctionality } from "@/components/admin/adminFunctionalities.js/AddBoardMemberFunctionality";
import toast from "react-hot-toast";

export const AddBoardMemberForm = () => {
  const submiHandler = async (FormData) => {
    const data = await AddBoardMemberFunctionality(FormData);
    console.log(data);
    if (data?.status == 200) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  };
  return (
    <section className="container">
      <h3 className="text-xl text-black text-center my-2">Add Board Member</h3>
      <div className="flex justify-center">
        <form
          className="bg-gray-300 w-1/3 p-4 flex flex-col"
          action={submiHandler}
        >
          <label className="text-black text-md font-semibold">Name</label>
          <input type="text" name="name" className="px-2 py-1 rounded-sm" />
          <label className="text-black text-md font-semibold">Email</label>
          <input type="email" name="email" className="px-2 py-1 rounded-sm" />
          <label className="text-black text-md font-semibold">Board ID</label>
          <input type="text" name="boardId" className="px-2 py-1 rounded-sm" />
          <label className="text-black text-md font-semibold">
            Designition
          </label>
          <input
            type="text"
            name="designition"
            className="px-2 py-1 rounded-sm"
          />
          <label className="text-black text-md font-semibold">Whatsapp</label>
          <input type="text" name="whatsapp" className="px-2 py-1 rounded-sm" />
          <input type="file" name="photo" />
          <input
            type="submit"
            value={"Add"}
            className="bg-green-500 text-black my-2 py-2"
          />
        </form>
      </div>
    </section>
  );
};
