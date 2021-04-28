//import React from "react";
import useForm from "./useForm";
import validate from "./validate";
const FormSignUp = () => {
  const { handleChange, values, handleSubmit } = useForm(validate);
 
  return (
    <div id="container">
      <form onSubmit={handleSubmit}>
        <header className="headStyle" >Aadhar Updation Form</header>
        <div id="myName">
          <label>Full Name : </label>
          <br />
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
          />
          <br />
        </div>
        <div id="demoGraphic">
          <label>Demographic Details to be Updated : </label>
          <select
            id="dropdown"
            name="demoGraphic"
            value={values.demoGraphic}
            options={values.demoGraphic}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="Name">Name</option>
            <option value="Date of Birth">Date of Birth</option>
            <option value="gender">gender</option>
            <option value="Address">Address</option>
            <option value="Language">Language</option>
          </select>
          <br />
        </div>
        <div id="sex">
          <label>Please Select your gender : </label>
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label>Male</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label>Female</label>
          <br />
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          <label>Other</label>
          <br />
        </div>
        <div id="dateOfBirth">
          <label>Date of Birth : </label>
          <input
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
          />
          <br />
        </div>
        <div id="eMail">
          <label>E-Mail : </label>
          <input
            type="text"
            name="eMail"
            value={values.eMail}
            onChange={handleChange}
          />
          <br />
        </div>
        <div id="mobileNumber">
          <label>Enter your Mobile Number : </label>
          <input
            type="text"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={handleChange}
          />
          <br />
        </div>
        <div id="checkBox">
          <input
            type="checkbox"
            name="checkBox"
            value={values.checkBox}
            onChange={handleChange}
          />
          <label>
            I hereby confirm the identity and address being true, correct and
            accurate
          </label>
          <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default FormSignUp