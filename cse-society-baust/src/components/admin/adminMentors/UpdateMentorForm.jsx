"use client";
import { MentorSchema } from "@/schemas";
import updateDataAxios from "@/utils/updateDataAxios";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import toast from "react-hot-toast";
import { PacmanLoader } from "react-spinners";

const UpdateMentorForm = ({
  _id,
  name,
  email,
  image,
  phone,
  presentPosition,
  formerPosition,
  batch,
}) => {
  const initialValues = {
    name: name,
    email: email,
    phone: phone,
    presentPosition: presentPosition,
    formerPosition: formerPosition,
    photo: null,
    batch: batch,
  };
  const router = useRouter();
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
  } = useFormik({
    initialValues: initialValues,
    validationSchema: MentorSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("presentposition", values.presentPosition);
      formData.append("formerPosition", values.formerPosition);
      formData.append("batch", values.batch);
      formData.append("photo", values.photo);

      let loader;
      if (isSubmitting) {
        loader = toast.loading("Loading");
      }
      const res = await updateDataAxios(formData, "update-mentor", _id);
      if (res.status === 200) {
        toast.dismiss(loader);
        toast.success(res.message);
        router.push(`/admin/mentors/view/${_id}`);
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
        <div className="w-[150px] mx-auto h-[150px] relative">
          <Image src={image} fill={true} className="rounded-full" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-1">
            <label className="text-lg text-slate-700">Name</label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              placeholder="Enter Full Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && touched.name ? (
              <>
                <p className="text-red-500">{errors.name}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label className="text-lg text-slate-700">Email</label>
            <input
              type="email"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              placeholder="Enter Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && touched.email ? (
              <>
                <p className="text-red-500">{errors.email}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label className="text-lg text-slate-700">Phone</label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              placeholder="+880"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              // required
            />
            {errors.phone && touched.phone ? (
              <>
                <p className="text-red-500">{errors.phone}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label className="text-lg text-slate-700">Present Position</label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              placeholder="Enter if available"
              name="presentPosition"
              value={values.presentPosition}
              onChange={handleChange}
              onBlur={handleBlur}
              // required
            />
          </div>
          <div className="flex flex-col my-1">
            <label className="text-lg text-slate-700">Former Position</label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              placeholder="Enter if available"
              name="formerPosition"
              value={values.formerPosition}
              onChange={handleChange}
              onBlur={handleBlur}
              // required
            />
          </div>
          <div className="flex flex-col my-1">
            <label className="text-lg text-slate-700">Batch</label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              placeholder="Enter Batch Number"
              name="batch"
              value={values.batch}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.batch && touched.batch ? (
              <>
                <p className="text-red-500">{errors.batch}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label className="text-lg text-slate-700">Photo</label>
            <input
              type="file"
              className="p-2 rounded-md border-2 hover:border-cyan-500"
              name="photo"
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
        </form>
      </div>
    </div>
  );
};

export default UpdateMentorForm;
