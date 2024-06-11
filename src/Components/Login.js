import "./Login.css";

function Login() {
  return (
    <div>
    <div className="container1">
      <h1 style={{ fontFamily: "Pristina", fontSize: "70px" }}>Instagram</h1>
      <form>
        <input
          type="text"
          placeholder="Phone number, username, or email"
          required
        />
        <br></br>
        <br></br>
        <input type="password" placeholder="password" required />
        <br></br>
        <br></br>
        <div className="loginc">
          <a href="" className="login btn">
            <p style={{ textAlign: "center" }}>Login</p>
          </a>
        </div>
        <br></br>
        <br></br>
        <p>OR</p>

        <div className="faceb">
          <a
            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221nptfsebwqz4asbh1lznh50ye3vbvstms365t1y4i4q8nlp1s%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D1d040d5a-8e46-413d-9aa9-0737d7d533c5%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221nptfsebwqz4asbh1lznh50ye3vbvstms365t1y4i4q8nlp1s%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
            className="fbook btn"
          >
            <p style={{ textAlign: "center" }}>Login with Facebook</p>
          </a>
        </div>
        <a href="#" className="forgot">
          Forgot password?
        </a>
      </form>
      <br></br>
      <p>
        Not registered?{" "}
        <a href="#" className="signup1" >
          Sign up
        </a>
      </p>

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
export default Login;
