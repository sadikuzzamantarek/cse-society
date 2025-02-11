"use client";
import { useFormik } from "formik";
import { AddMemberFunctionality } from "../../adminFunctionalities.js/AddMemberFunctionality";
import toast from "react-hot-toast";
const AddMemberForm = () => {
  const initValues={
    
  }
  useFormik({
    initialValues: initValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const formHandler = async (FormData) => {
    const data = await AddMemberFunctionality(FormData);
    // console.log(response);
    console.log(data);
    if (data?.status == 200) {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  };

  return (
    <section className="container">
      <h3 className="font-md text-white font-bold text-center">Add Memebrs</h3>
      <div className="flex justify-center">
        <form className="flex flex-col w-1/3" action={formHandler}>
          <label className="text-md text-black my-1">Name</label>
          <input
            required
            type="text"
            name="name"
            className="my-1 py-2 px-3 rounded-md"
          />
          <label className="text-md text-black my-1">Email</label>
          <input
            required
            type="text"
            className="my-1 py-2 px-3 rounded-md"
            name="email"
          />
          <label className="text-md text-black my-1">University ID</label>
          <input
            required
            className="my-1 py-2 px-3 rounded-md"
            type="text"
            name="universityID"
          />
          <label className="text-md text-black my-1">Field Of Interest</label>
          <input
            required
            type="text"
            name="fieldOfInterest"
            className="my-1 py-2 px-3 rounded-md"
          />
          <label className="text-md text-black my-1">Department</label>
          <input
            required
            type="text"
            name="department"
            className="my-1 py-2 px-3 rounded-md"
          />
          <label className="text-md text-black my-1">Batch</label>
          <input
            required
            type="text"
            name="batch"
            className="my-1 py-2 px-3 rounded-md"
          />
          <label className="text-md text-black my-1">Level</label>
          <select name="level" size="3">
            <option value="1" className="my-2">
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <label className="text-md text-black my-1">Term</label>

          <select name="term" size="3">
            <option value="I">I</option>
            <option value="II">II</option>
          </select>
          <label className="text-md text-black my-1">Phone</label>
          <input
            required
            type="text"
            name="phone"
            className="my-1 py-2 px-3 rounded-md"
          />
          <label className="text-md text-black my-1">Designition</label>
          <input
            required
            type="text"
            name="designition"
            className="my-1 py-2 px-3 rounded-md"
          />
          <input required type="file" name="photo" className="my-1" />
          <input
            type="submit"
            className="text-black bg-green-500 my-2 py-2"
            value={`Add`}
            cl
          />
        </form>
      </div>
    </section>
  );
};

export default AddMemberForm;
