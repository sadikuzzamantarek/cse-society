"use client";
import { MemberSchema } from "@/schemas";
import { FormSubmission } from "@/utils/formSubmission";
import { useFormik } from "formik";
import React, { Fragment, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { PacmanLoader } from "react-spinners";

const AddMemberFormComp = () => {
  const fileInput = useRef("");
  const initialValues = {
    name: "",
    email: "",
    designition: "",
    phone: "",
    department: "",
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
      console.log(values);
      if (isSubmitting) {
        loader = toast.loading("Loading");
      }
      const res = await FormSubmission(formData, "add-exclusive-member");
      console.log(res);
      if (res.status === 500) {
        toast.dismiss(loader);
        toast.error(res.message);
      } else if (res.status === 200) {
        toast.dismiss(loader);
        toast.success(res.message);
        action.resetForm();
        // setFieldValue("photo", null);
        // fileInput.current.files[0]=null
      } else if (res.status === 400) {
        toast.dismiss(loader);
        toast.error(res.message);
      }
    },
  });

  return (
    <Fragment>
      <h3 className="text-2xl font-bold text-center my-3">Add Member</h3>
      <div className="flex flex-row justify-center">
        <div className="w-1/2 bg-gray-200 p-4 rounded-md border-2 border-slate-300">
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
                // value={values.photo}
                ref={fileInput}
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
    </Fragment>
  );
};

export default AddMemberFormComp;
