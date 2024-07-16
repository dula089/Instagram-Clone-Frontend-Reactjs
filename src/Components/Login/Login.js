import { useState, useEffect } from "react";
import "./Login.css";
import { FaFacebookF } from "react-icons/fa";
import Footer from "../Footer/Footer";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load email from local storage
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setFormData((prevData) => ({
        ...prevData,
        email: savedEmail,
      }));
    }
  }, []);

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
      // Save email to local storage
      localStorage.setItem("email", formData.email);
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
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
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  return (
    <div>
      <div className="img">
        <div className="img2">
          <div className="container1">
            <h1
              style={{
                fontFamily: "Pristina",
                fontSize: "70px",
                textAlign: "center",
              }}
            >
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
                <a
                  href="/home"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "15px",
                  }}
                >
                  Login
                </a>
              </button>
              <br />
              <br></br>
              <br></br>
              <br></br>
              <hr></hr>
              <br></br>
              <p>OR</p>
              <br></br>
              <hr></hr>
              <br />
              <div className="faceb">
                <a href="#" className="fbook btn">
                  <p style={{ textAlign: "center" }}>
                    <FaFacebookF size={18} />
                    &nbsp;&nbsp;&nbsp; Login with Facebook
                  </p>
                </a>
              </div>
              <br />
              <br />
              <br />
              <br />

              <a href="/forgot" className="forgot">
                Forgot password?
              </a>
            </form>
            <br />

            <p>
              Not registered?{" "}
              <a href="/signup" className="signup1">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
     <Footer></Footer>
    </div>
  );
}

export default Login;
