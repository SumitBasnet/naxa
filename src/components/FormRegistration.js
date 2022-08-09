import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Header from "./Header";

const FormRegistration = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const defaultValue = {
    name: "",
    email: "",
    address: "",
    contact: "",
    cvfile: "",
    image: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("please enter valid email"),
    address: yup.string().required("Please enter your address"),
    contact: yup
      .string()
      .required("Please enter your phone number")
      .matches(phoneRegExp, "Phone number is not valid"),
    cvfile: yup
      .mixed()
      .required("You need to provide CV")
      .test("fileSize", "The File is too large", (value) => {
        return value && value[0].size <= 3000000;
      })
      .test("type", "We only take Jpeg file", (value) => {
        return value && value[0].type === "image/jpeg";
      }),
    image: yup.mixed().required("You need to provide photo"),
  });
  const handleSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Formik
      initialValues={defaultValue}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <div className="container">
        <div className="col-md-12 text-center mt-5 regForm">
          <h1 style={{ color: "#ffab00" }}>Form</h1>
          <Form>
            <div className="col-md-12 mt-4">
              <Field
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="name" />
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Field
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Field
                type="text"
                name="address"
                placeholder="Enter Your Address"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="address" />
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <Field
                type="text"
                name="contact"
                placeholder="Enter Your Phone Number"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="contact" />
              </p>
            </div>
            <Field
              type="file"
              name="cvfile"
              accept="application/pdf,application/DOCX"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="cvfile" />
            </p>
            <Field
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              className="form-control"
            />
            <p className="text-danger">
              <ErrorMessage name="image" />
            </p>
            <button className="btn btn-primary " type="submit">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default FormRegistration;
