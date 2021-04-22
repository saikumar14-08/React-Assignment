import React, { Component } from "react";
import "./Form.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      demoGraphic: "",
      gender: "",
      dob: "",
      eMail: "",
      mobileNumber: "",
      checkBox: false,
    };
  }
  myAlerts = {
    name: `Your name does not meet the minimum requirements because 
* Emptyname
* Minimum of three characters should be there
* Should not contain special characters including numbers.`,
    gender: "Please Select gender",
    age: `Your age is below 18.
* To fill the form your age must be 18 or above.`,
    mailId: `Please re-check your Mail-ID :
* It must contain some text before and after the symbol @`,
    mobileNumberNumber: `Please re-check your mobileNumber Number 
* mobileNumber Number Can't be empty
* It Should be exactly 10 digits 
* It should start with 6,7,,8,9`,
    termsCheckBox: "Please accept Terms and Conditions",
  };
  handleError = (errorType, field) => {
    if (field) {
      field.style.border = "1px solid red";
    }
    alert(this.myAlerts[errorType]);
    return false;
  };
  regex = {
    namevalidation: /^[a-zA-Z\s]*$/,
    mail: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    mobileNumber: /^[6-9]\d{9}$/,
  };
  calculateAge = (birthDate) => {
    let dob = new Date(birthDate);
    let month_diff = Date.now() - dob.getTime();
    let ageDiffinDate = new Date(month_diff);
    let BirthYear = ageDiffinDate.getUTCFullYear();
    return Math.abs(BirthYear - 1970);
  };
  handlechange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    if (
      !this.state.fullName ||
      this.state.fullName.length < 3 ||
      !this.state.fullName.match(this.regex["namevalidation"])
    ) {
      this.handleError("name", this.state.fullName);
    } else if (!this.state.demoGraphic) {
      alert("Select an option from dropdown");
      return false;
    } else if (!this.state.gender) {
      this.handleError("gender", this.state.gender);
    } else if (!this.state.dob || this.calculateAge(this.state.dob) < 18) {
      this.handleError("age");
    } else if (
      !this.state.eMail ||
      !this.state.eMail.match(this.regex["mail"])
    ) {
      this.handleError("mailId", this.state.eMail);
    } else if (
      !this.state.mobileNumber ||
      !this.state.mobileNumber.match(this.regex["mobileNumber"])
    ) {
      this.handleError("mobileNumberNumber", this.state.mobileNumber);
    } else if (!this.state.checkBox) {
      this.handleError("termsCheckBox");
    } else {
      return true;
    }
    return false;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      alert("Form is submitted");
      this.setState({
        fullName: "",
        demoGraphic: "",
        dob: "",
        eMail: "",
        mobileNumber: "",
      });
      e.target.reset();
    }
  };
  render() {
    return (
      <div id="container">
        <form onSubmit={this.handleSubmit}>
          <header>Aadhar Updation Form</header>
          <div id="myName">
            <label>Full Name : </label>
            <br />
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handlechange}
            />
            <br />
          </div>
          <div id="demoGraphic">
            <label>Demographic Details to be Updated : </label>
            <select
              id="dropdown"
              name="demoGraphic"
              value={this.state.demoGraphic}
              options={this.state.demoGraphic}
              onChange={this.handlechange}
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
              onChange={this.handlechange}
            />
            <label>Male</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handlechange}
            />
            <label>Female</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={this.handlechange}
            />
            <label>Other</label>
            <br />
          </div>
          <div id="dateOfBirth">
            <label>Date of Birth : </label>
            <input
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handlechange}
            />
            <br />
          </div>
          <div id="eMail">
            <label>E-Mail : </label>
            <input
              type="text"
              name="eMail"
              value={this.state.eMail}
              onChange={this.handlechange}
            />
            <br />
          </div>
          <div id="mobileNumber">
            <label>Enter your Mobile Number : </label>
            <input
              type="text"
              name="mobileNumber"
              value={this.state.mobileNumber}
              onChange={this.handlechange}
            />
            <br />
          </div>
          <div id="checkBox">
            <input
              type="checkbox"
              name="checkBox"
              value={this.state.checkBox}
              onChange={this.handlechange}
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
  }
}
export default Form;