import { useState } from "react";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log(`Form submission failed
         due to validation errors.`);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = `Password must be at 
        least 8 characters long`;
    }

    return errors;
  };

  return (
    <div>
      <div className="img">
        <div className="img2">
          <div className="container1">
            <h1 style={{ fontFamily: "Pristina", fontSize: "70px" }}>
              Instagram
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label className="form-label"></label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
              <div>
                <label className="form-label"></label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <button className="submit-button" type="submit">
                Login
              </button>
            </form>
            <br></br>
            <p>
              Not registered?{" "}
              <a href="/signup" className="signup1">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="foot">
        <footer>
          <a href="" className="foot1">
            Meta
          </a>
          <a href="" className="foot1">
            About
          </a>
          <a href="" className="foot1">
            Blog
          </a>
          <a href="" className="foot1">
            Jobs
          </a>
          <a href="" className="foot1">
            Help
          </a>
          <a href="" className="foot1">
            API
          </a>
          <a href="" className="foot1">
            Privacy
          </a>
          <a href="" className="foot1">
            Terms
          </a>
          <a href="" className="foot1">
            Locations
          </a>
          <a href="" className="foot1">
            Contact Uploading & Non-Users
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
