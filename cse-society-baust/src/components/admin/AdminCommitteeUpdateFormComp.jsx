"use client";
import { CommitteeSchema } from "@/schemas";
import { FormSubmission } from "@/utils/formSubmission";
import { useFormik } from "formik";
import React from "react";
import toast from "react-hot-toast";

const AdminCommitteeUpdateFormComp = ({
  teamInformation,
  rank,
  _id,
  name,
  email,
  universityID,
  image,
  department,
  batch,
  phone,
  designition,
  level,
  term,
}) => {
  const initialValues = {
    name: name,
    email: email,
    universityID: universityID,
    department: department,
    batch: batch,
    phone: phone,
    team: teamInformation.teamName,
    rank: teamInformation.rank,
    designition: designition,
    level: level,
    term: term,
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
    validationSchema: CommitteeSchema,
    onSubmit: async (values, action) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("universityID", values.universityID);
      formData.append("department", values.department);
      formData.append("batch", values.batch);
      formData.append("phone", values.phone);
      formData.append("team", values.team);
      formData.append("rank", values.rank);
      formData.append("designition", values.designition);
      formData.append("level", values.level);
      formData.append("term", values.term);
      formData.append("photo", values.photo);
      let loader;
      if (isSubmitting) {
        loader = toast.loading("Loading");
      }
      const res = await FormSubmission(formData, "update-committee-member");
      console.log(res);
      if (res.status === 500) {
        toast.dismiss(loader);
        toast.error(res.message);
      } else if (res.status === 200) {
        toast.dismiss(loader);
        toast.success(res.message);
        action.resetForm();
        setFieldValue("photo", null);
      } else if (res.status === 400) {
        toast.dismiss(loader);
        toast.error(res.message);
      }
      toast.dismiss(loader);
    },
  });
  return (
    <>
      <h3 className="text-2xl font-bold text-center my-3">
        Add Committee Member
      </h3>
      <div className="flex flex-row justify-center">
        <div className="w-1/2 bg-gray-200 rounded-md border-2 border-slate-300 p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-1">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="name"
                name="name"
                placeholder="Enter the name"
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
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="email"
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
              <label htmlFor="">University ID</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="universityID"
                name="universityID"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.universityID}
              />
              {errors.universityID && touched.universityID ? (
                <>
                  <p className="text-red-500">{errors.universityID}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="">Department</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="department"
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
              <label htmlFor="">Batch</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="batch"
                name="batch"
                value={values.batch}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.batch && touched.batch ? (
                <>
                  <p className="text-red-500">{errors.batch}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="">Phone</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="phone"
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
              <label htmlFor="">Team Name</label>

              <select
                name="team"
                id="team"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                value={values.team}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="" disabled>
                  Select a Team
                </option>

                <option value="Core">Core</option>
                <option value="Communication">Communication</option>
                <option value="Organizing">Organizing</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Robotics">Robotics</option>
                <option value="Development">Development</option>
                <option value="Media and Publication">
                  Media and Publication
                </option>
              </select>
              {errors.team && touched.team ? (
                <>
                  <p className="text-red-500">{errors.team}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="">Rank</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="rank"
                name="rank"
                value={values.rank}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.rank && touched.rank ? (
                <>
                  <p className="text-red-500">{errors.rank}</p>
                </>
              ) : null}
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor="">Designition</label>
              <input
                type="text"
                className="p-2 rounded-md border-2 hover:border-cyan-300"
                id="designition"
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
                  // onChange={(event) => {
                  //   setFieldValue("term", event.target.value);
                  // }}
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
    </>
  );
};

export default AdminCommitteeUpdateFormComp;
