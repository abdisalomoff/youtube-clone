import React from "react";
import "./Register.scss";
import useRegister from "../../hooks/useRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    error,
    handleSubmit,
    handleFirstnameChange,
    handleLastnameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useRegister();

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="form-control">
          <input
            type="text"
            onChange={handleFirstnameChange}
            placeholder="Enter your firstname"
          />
          {error.firstName && <p>{error.firstName}</p>}
        </div>
        <div className="form-control">
          <input
            type="text"
            onChange={handleLastnameChange}
            placeholder="Enter your  lastname"
          />
          {error.lastName && <p>{error.lastName}</p>}
        </div>
        <div className="form-control">
          <input
            type="text"
            onChange={handleEmailChange}
            placeholder="Enter your  email"
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handlePasswordChange}
            placeholder="Enter your  password"
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your  password"
          />
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
        </div>
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
