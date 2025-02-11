"use client";
import { AdvisorSchema } from "@/schemas";
import updateDataAxios from "@/utils/updateDataAxios";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { PacmanLoader } from "react-spinners";

const UpdateAdvisorFormComp = ({
  _id,
  name,
  email,
  designition,
  position,
  phone,
  department,
  image,
}) => {
  const router = useRouter();

  const initialValues = {
    name: name,
    email: email,
    designition: designition,
    position: position,
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
  } = useFormik({
    initialValues: initialValues,
    validationSchema: AdvisorSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("designition", values.designition);
      formData.append("position", values.position);
      formData.append("phone", values.phone);
      formData.append("department", values.department);
      formData.append("photo", values.photo);

      let loader;
      if (isSubmitting) {
        loader = toast.loading("Loading");
      }
      const res = await updateDataAxios(formData, "update-advisor", _id);
      if (res.status === 200) {
        toast.dismiss(loader);
        toast.success(res.message);
        router.push(`/admin/advisors/view/${_id}`);
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
            <label htmlFor="" className="text-lg text-slate-700">
              Name
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Name"
              name="name"
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
            <label htmlFor="" className="text-lg text-slate-700">
              Email
            </label>
            <input
              type="email"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Email"
              name="email"
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
            <label htmlFor="" className="text-lg text-slate-700">
              Designition
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Departmental Designition"
              name="designition"
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
            <label htmlFor="" className="text-lg text-slate-700">
              Position
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Advisor Position"
              name="position"
              value={values.position}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.position && touched.position ? (
              <>
                <p className="text-red-500">{errors.position}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="" className="text-lg text-slate-700">
              Phone
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Phone Number"
              name="phone"
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
            <label htmlFor="" className="text-lg text-slate-700">
              Department
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Department"
              name="department"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.department && touched.department ? (
              <>
                <p className="text-red-500">{errors.department}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="" className="text-lg text-slate-700">
              Photo
            </label>
            <input
              type="file"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
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

export default UpdateAdvisorFormComp;
