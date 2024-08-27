import React from "react";
import "./LoginForm.css"; // Import your CSS file for styling
import loginIMG from "../assets/login.webp";
import Swal from "sweetalert2";
const AnnualReport = () => {
  const handleLogin = () => {
    // Implement your login logic here
    Swal.fire({
      title: "logged in..!",
      text: "Are you want to delete..?",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="container1">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
        Login Form
      </p>
      <div className="login-container">
        <img src={loginIMG} alt="login-image" className="login-image" />
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />

          <button
            type="button"
            onClick={handleLogin}
            class="button-62"
            role="button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnnualReport;
