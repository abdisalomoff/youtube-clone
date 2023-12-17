import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate()
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let formValid = true;
    const updateError = {
      firstName: firstName ? "" : "Firstname is required",
      lastName: lastName ? "" : "Lastname is required",
      email: validateEmail(email) ? "" : "Invalid email address",
      password: validatePassword(password) ? "" : "Password should be more than 4 signs!",
      confirmPassword: password === confirmPassword ? "" : "Passwords do not match",
    };

    Object.keys(updateError).forEach((key) => {
      if (updateError[key]) {
        formValid = false;
      }
    });

    if (!formValid) {
      setError(updateError);
      return;
    }

    const userRegister = {
      email,
      password
    };
    localStorage.setItem("userRegister", JSON.stringify(userRegister));
    navigate('/login')
    // evt.target.reset();
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    error,
    handleFirstnameChange: (evt) => {
      setFirstname(evt.target.value.trim());
      setError({ ...error, firstName: "" });
    },
    handleLastnameChange: (evt) => {
      setLastname(evt.target.value.trim());
      setError({ ...error, lastName: "" });
    },
    handleEmailChange: (evt) => {
      setEmail(evt.target.value.trim());
      setError({ ...error, email: "" });
    },
    handlePasswordChange: (evt) => {
      setPassword(evt.target.value.trim());
      setError({ ...error, password: "" });
    },
    handleConfirmPasswordChange: (evt) => {
      setconfirmPassword(evt.target.value.trim());
      setError({ ...error, confirmPassword: "" });
    },
    handleSubmit,
  };
};

export default useRegister;
