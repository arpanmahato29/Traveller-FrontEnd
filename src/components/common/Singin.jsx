import React,{ useState} from 'react'
import { GrGoogle,GrFacebookOption } from "react-icons/gr";

import Header from "./Header"
import Menu2 from "./Menu2"
import Footer from "./Footer"
const Signin = () => {
  const [loginSwitch,setLoginSwitch] = useState(true);

  const toggleLoginContainer = () => {
    setLoginSwitch(!loginSwitch);
  }

  

  const SignupContainer = () => {
    const [signupCredentials, setSignupCredentials] = useState({
      firstname : "",
      lastname : "",
      email : "",
      password : ""
    });

    const handleChange = name => event => {
      setSignupCredentials({ ...signupCredentials, [name]: event.target.value });
    };

    const handleSignup = (event) => {
      event.preventDefault();
    }

    const {firstname,lastname,email,password} = signupCredentials;
    return (
      <div className="text-start">
        <h2>Join to unlock the best of Tripadvisor.</h2>
        <form className="mt-4">
            <div class="mb-3">
              <label for="firstname" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstname" onChange={handleChange("firstname")} value={firstname}/>
            </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastname" onChange={handleChange("lastname")} value={lastname}/>
            </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" onChange={handleChange("email")} value={email}/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" onChange={handleChange("password")} value={password}/>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="button" onClick={handleSignup}>Join</button>
            <a class="text-muted text-center ms-3" href="#" onClick={toggleLoginContainer}>
              <p style={{marginBottom:"0", fontSize:"0.6rem"}}>Already a member?</p>
              <p style={{marginBottom:"0", fontSize:"0.6rem"}}>Sign in using user Traveller account.</p>
            </a>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-2">
            <button className="btn btn-danger"><GrGoogle size="30"/> Google</button> 
            <button className="btn btn-primary"><GrFacebookOption size="30"/> Facebook</button>
          </div>
        </form>
        <p className="mt-3 px-5 text-center" style={{fontSize:"0.7rem"}}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</p>
      </div>
    )
  }

  const LoginContainer = () => {
    const [loginCredentials, setLoginCredentials] = useState({
      email : "",
      password : ""
    });

    const handleChange = name => event => {
      setLoginCredentials({ ...loginCredentials, [name]: event.target.value });
    };

    const handleLogin = (event) => {
      event.preventDefault();
    }

    const {email, password} = loginCredentials;
    return (
      <div className="text-start">
        <h2>Welcome Back Traveller.</h2>
        <form className="px-3 pt-3 pb-2 ">
          <div className="mb-3">
            <label for="email" class="form-label" style={{fontSize:"0.9rem"}}>Email</label>
            <input type="email" class="form-control" id="email" onChange={handleChange("email")} value={email}/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label" style={{fontSize:"0.9rem"}}>Password</label>
            <input type="password" class="form-control" id="password" onChange={handleChange("password")} value={password}/>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" type="button" onClick={handleLogin}>Login</button>
            <a class="text-muted text-center ms-3" href="#" onClick={toggleLoginContainer}>
              <p style={{marginBottom:"0", fontSize:"0.6rem"}}>Not a member?</p>
              <p style={{marginBottom:"0", fontSize:"0.6rem"}}>Join to unlock the best of Traveller.</p>
            </a>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-2">
            <button className="btn btn-danger"><GrGoogle size="30"/> Google</button> 
            <button className="btn btn-primary"><GrFacebookOption size="30"/> Facebook</button>
          </div>
        </form>
        <p className="mt-3 px-5 text-center" style={{fontSize:"0.7rem"}}>By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <Menu2 />
      <div class="modal-dialog bg-secondary">
          <div class="modal-content border border-light border-4">
            
            <div class="modal-body text-dark me-5 ms-2">
            { 
              loginSwitch ? <LoginContainer /> : <SignupContainer />
            }
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}




export default Signin
