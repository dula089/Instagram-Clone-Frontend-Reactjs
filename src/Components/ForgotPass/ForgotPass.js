import "./ForgotPass.css";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function ForgotPass() {
  return (
    <div>
      <br></br>
      <h1
        style={{ fontFamily: "Pristina", fontSize: "40px", marginLeft: "30px" }}
      >
        <FaInstagram size={30} />
        &nbsp; Instagram
      </h1>
      <hr></hr>
      <div className="container2">
        <IoLockClosedOutline size={120} className="lock-icon" />
        <p style={{ fontSize: "20px" }}>
          <b>Trouble logging in?</b>
        </p>
        <p>
          Enter your email, phone, or username and we'll <br />
          send you a link to get back into your account.
        </p>

        <input
          type="text"
          placeholder="Email, Phone, or Username"
          required
        ></input>
        <div className="loginc">
          <a href="" className="login btn">
            <p style={{ textAlign: "center" }}>Login</p>
          </a>
        </div>
        <a href="#" className="reset">
          Can't reset your password?
        </a>
        <br></br>
        <br></br>
        <p>OR</p>
        <br></br>
        <a href="/signup" className="create">
          Create new account
        </a>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <a href="/" className="back">
          Back to Login
        </a>
      </div>

      <div className="foot2">
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
export default ForgotPass;
