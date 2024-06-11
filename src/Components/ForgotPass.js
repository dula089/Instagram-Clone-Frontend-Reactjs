import "./ForgotPass.css";

function ForgotPass (){
    return(
        <div>
            <h1 style={{ fontFamily: "Pristina", fontSize: "40px" }}>Instagram</h1>
            <hr></hr>
        <div className="container2">
            <img src="lock.png"></img>
            <p>
                <b>Trouble logging in?</b>
            </p>
            <p>Enter your email, phone, or username and we'll <br/>send you a link to get back into your account.</p>

            <input type="text" placeholder="Email, Phone, or Username" required></input>
            <div className="loginc">
          <a href="" className="login btn">
            <p style={{ textAlign: "center" }}>Login</p>
          </a>
        </div>
        <a href="#">Can't reset your password?</a>
        <br></br><p>OR</p>
        <a href="#" className="create">Create new account</a>
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