import { useState } from "react";
import "./Login.css";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { login } from "../services/apiService";


function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setLoginError("");

      try {
       
        const data = await login(formData.username, formData.password);

        
        localStorage.setItem("token", data.token);
        localStorage.setItem("expiresIn", data.expiresIn);
        localStorage.setItem("username", formData.username);

        setSuccessMessage("Login Successful.");
        setLoading(false);

        
        setTimeout(() => {
          window.location.href = "/home";
        }, 1500);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setLoginError("Incorrect username or password. Please try again.");
        } else {
          setLoginError("An error occurred. Please try again later.");
        }
        setLoading(false);
      }
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      {loading && <Loader />}

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

            {successMessage && (
              <p
                className="success-message"
                style={{ textAlign: "center", color: "green" }}
              >
                {successMessage}
              </p>
            )}

            {loginError && (
              <p
                className="error-message"
                style={{ textAlign: "center", color: "red" }}
              >
                {loginError}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div>
                <label className="form-label"></label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  disabled={loading}
                />
                {errors.username && (
                  <span className="error-message">{errors.username}</span>
                )}
              </div>
              <div className="password-container">
                <label className="form-label"></label>
                <input
                  className="form-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  disabled={loading}
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <button className="submit-button" type="submit" disabled={loading}>
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <span
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Login
                  </span>
                )}
              </button>
              <br />
              <br />
              <br />
              <br />
              <hr />
              <br />
              <p>OR</p>
              <br />
              <hr />
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
      <Footer />
    </div>
  );
}

export default Login;
