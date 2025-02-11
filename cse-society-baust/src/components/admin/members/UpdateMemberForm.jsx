"use client";
import { MemberSchema } from "@/schemas";
import updateDataAxios from "@/utils/updateDataAxios";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { PacmanLoader } from "react-spinners";

const UpdateMemberForm = ({
  _id,
  name,
  email,
  designition,
  phone,
  department,
  image,
}) => {
  //for handling refresh current route and pushing to another route
  const router = useRouter();

  const initialValues = {
    name: name,
    email: email,
    designition: designition,
    phone: phone,
    department: department,
    photo: null,
  };
  const {
    values,
    isValid,
    isSubmitting,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: MemberSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("photo", values.photo);
      formData.append("email", values.email);
      formData.append("designition", values.designition);
      formData.append("phone", values.phone);
      formData.append("name", values.name);
      formData.append("department", values.department);

      let loader;
      if (isSubmitting) {
        loader = toast.loading("Loading");
      }
      const res = await updateDataAxios(
        formData,
        "update-exclusive-member",
        _id
      );
      if (res.status === 200) {
        toast.dismiss(loader);
        toast.success(res.message);
        router.push(`/admin/members/view/${_id}`);
        router.refresh();
      } else {
        toast.dismiss(loader);
        toast.error(res.message);
      }
      toast.dismiss(loader);
    },
  });
  return (
    <div className="flex flex-row justify-center">
      <div className="w-1/2 bg-gray-200 p-4 rounded-md border-2 border-slate-300">
        <div className="w-[150px] mx-auto h-[150px] relative ">
          <Image src={image} fill={true} className="rounded-full" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-1">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <>
                <p className="text-red-500">{errors.name}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <>
                <p className="text-red-500">{errors.email}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Designition</label>
            <input
              type="text"
              name="designition"
              id="designition"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Designition"
              value={values.designition}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.designition && touched.designition ? (
              <>
                <p className="text-red-500">{errors.designition}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Start with +880"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <>
                <p className="text-red-500">{errors.phone}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Department</label>
            <input
              type="text"
              name="department"
              id="department"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone && touched.phone ? (
              <>
                <p className="text-red-500">{errors.phone}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              onChange={(e) => {
                console.log(e.currentTarget.files[0]);
                setFieldValue("photo", e.currentTarget.files[0]);
              }}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-3">
            <input
              type="submit"
              className={`w-full py-2  rounded-sm text-white ${
                isValid ? "bg-gray-800 cursor-pointer" : "bg-gray-400"
              }
            ${isSubmitting ? "hidden" : ""}
        `}
              disabled={isSubmitting || !isValid}
            />
            {isSubmitting && <PacmanLoader color="#1F2937" />}
          </div>
          {/* <button onClick={handleReset}>Reset</button> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateMemberForm;
