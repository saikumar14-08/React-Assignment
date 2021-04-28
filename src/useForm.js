import { useState } from "react";
const useForm = (validate) => {
  const [values, setValues] = useState({
    fullName: "",
    demoGraphic: "",
    gender: "",
    dob: "",
    eMail: "",
    mobileNumber: "",
    checkBox: false,
  });
  const [errors, setErrors] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));

  };
  
  return { handleChange, values, handleSubmit };
};
export default useForm;