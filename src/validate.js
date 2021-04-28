export default function validate(values) {
  let errors = {};
  values.calculateAge = (birthDate) => {
    let dob = new Date(birthDate);
    let month_diff = Date.now() - dob.getTime();
    let ageDiffinDate = new Date(month_diff);
    let BirthYear = ageDiffinDate.getUTCFullYear();
    return Math.abs(BirthYear - 1970);
  };
  if (
    !values.fullName ||
    values.fullName.length < 3 ||
    !/^[a-zA-Z\s]*$/.test(values.fullName)
  ) {
    errors.fullName = alert(`Your name does not meet the minimum requirements because 
    * Emptyname
    * Minimum of three characters should be there
    * Should not contain special characters including numbers.`);
  } else if (!values.demoGraphic) {
    errors.demoGraphic = alert(`Select an option from dropdown`);
  } else if (!values.gender) {
    errors.gender = alert(`Please Select gender`);
  } else if (!values.dob || values.calculateAge(values.dob) < 18) {
    errors.dob = alert(`Your age is below 18.
    * To fill the form your age must be 18 or above.`);
  } else if (
    !values.eMail ||
    !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(values.eMail)
  ) {
    errors.eMail = alert(`Please re-check your Mail-ID :
    * It must contain some text before and after the symbol @`);
  } else if (
    !values.mobileNumber ||
    !/^[6-9]\d{9}$/.test(values.mobileNumber)
  ) {
    errors.mobileNumber = alert(`Please re-check your mobileNumber Number 
    * mobileNumber Number Can't be empty
    * It Should be exactly 10 digits 
    * It should start with 6,7,,8,9`);
  } else if (!values.checkBox) {
    errors.checkBox = alert(`Please accept terms and conditions`);
  }
  return errors;
}