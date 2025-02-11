"use client";
import { committeeRegistrationSchema } from "@/schemas";
import { FormSubmissionPublic } from "@/utils/formSubmissionPublic";
import { useFormik } from "formik";
import React, { Fragment } from "react";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";

const JoinWithUsFormComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    universityID: "",
    photo: null,
    phone: "",
    fieldOfInterest: "",
    department: "",
    batch: "",
    level: "",
    term: "",
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
    validationSchema: committeeRegistrationSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("universityID", values.universityID);
      formData.append("photo", values.photo);
      formData.append("department", values.department);
      formData.append("batch", values.batch);
      formData.append("level", values.level);
      formData.append("term", values.term);
      formData.append("phone", values.phone);
      formData.append("fieldOfInterest", values.fieldOfInterest);
      let loader;
      if (isSubmitting) {
        loader = toast.loading("Loading");
      }
      const res = await FormSubmissionPublic(formData, "register-committee");
      console.log(res);
      if (res.status === 500) {
        toast.dismiss(loader);
        toast.error(res.message);
      } else if (res.status === 200) {
        toast.dismiss(loader);
        toast.success(res.message);
        action.resetForm();
      } else if (res.status === 400) {
        toast.dismiss(loader);
        toast.error(res.message);
      }
    },
  });
  const fileHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setFieldValue("photo", reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <Fragment>
      <div className="w-full bg-gray-200 p-4 rounded-md border-2 border-slate-300">
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
              type="text"
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
              University ID
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Your University ID"
              name="universityID"
              value={values.universityID}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.universityID && touched.universityID ? (
              <>
                <p className="text-red-500">{errors.universityID}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="" className="text-lg text-slate-700">
              University ID
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter Your Phone Number. Start with +880"
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
              Field of Interest
            </label>
            <input
              type="text"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              placeholder="Enter which sector in IT interest you more"
              name="fieldOfInterest"
              value={values.fieldOfInterest}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fieldOfInterest && touched.fieldOfInterest ? (
              <>
                <p className="text-red-500">{errors.fieldOfInterest}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Batch</label>

            <select
              name="batch"
              id="batch"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              value={values.batch}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled>
                Select Your Batch
              </option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="17">18</option>
              <option value="17">19</option>
            </select>
            {errors.batch && touched.batch ? (
              <>
                <p className="text-red-500">{errors.batch}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Department</label>

            <select
              name="department"
              id="department"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              value={values.department}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" disabled>
                Select Your Department
              </option>
              <option value="CSE">CSE</option>
              <option value="ICT">ICT</option>
              <option value="ME">ME</option>
              <option value="IPE">IPE</option>
              <option value="EEE">EEE</option>
              <option value="CE">CE</option>
              <option value="BBA">BBA</option>
              <option value="AIS">AIS</option>
              <option value="ENG">ENG</option>
            </select>
            {errors.department && touched.department ? (
              <>
                <p className="text-red-500">{errors.department}</p>
              </>
            ) : null}
          </div>
          <div className="flex flex-row my-1">
            <div className="flex w-1/2 flex-col my-1">
              <label htmlFor="">Level</label>
              <select
                name="level"
                id="level"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                value={values.level}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" disabled>
                  Select Level
                </option>

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {errors.level && touched.level ? (
                <>
                  <p className="text-red-500">{errors.level}</p>
                </>
              ) : null}
            </div>
            <div className="flex w-1/2 flex-col my-1">
              <label htmlFor="">Term</label>
              <select
                name="term"
                id="term"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                value={values.term}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" disabled>
                  Select Term
                </option>

                <option value="I">I</option>
                <option value="II">II</option>
              </select>
              {errors.term && touched.term ? (
                <>
                  <p className="text-red-500">{errors.term}</p>
                </>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="">Photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="p-2 rounded-md border-2 hover:border-cyan-300"
              onChange={(event) => {
                setFieldValue("photo", event.target.files[0]);
                console.log(event.currentTarget.files[0]);
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
              value={`Register`}
            />
            {isSubmitting && <ClockLoader color="#1F2937" />}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default JoinWithUsFormComponent;
