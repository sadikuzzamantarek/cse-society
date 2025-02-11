"use client";
import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const AddNoticeForm = () => {
  const noticeSchema = Yup.object({
    title: Yup.string()
      .required("You must provide a title")
      .min(5, "Cant be less than 5 characters")
      .max(100, "Cant be more than 100 characters"),
    subtitle: Yup.string()
      .required("You must provide a Subtitle")
      .min(5, "Cant be less than 5 characters")
      .max(220, "Cant be more than 100 characters"),

    notice: Yup.string()
      .required("You must provide a Body for the notice")
      .min(5, "Cant be less than 50 characters"),
  });
  return (
    <>
      AddNoticeForm
      <Formik
        initialValues={{
          title: "",
          subtitle: "",
          notice: "",
          thumbnail: "",
        }}
        validationSchema={noticeSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      ></Formik>
    </>
  );
};

export default AddNoticeForm;
