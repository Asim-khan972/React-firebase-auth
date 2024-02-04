import FullPageLoader from "../components/FullPageLoader.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config.js";
function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState("login");
  const [useCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState("");
  console.log(auth);

  const handleCredentials = (e) => {
    setUserCredentials({ ...useCredentials, [e.target.name]: e.target.value });
    console.log(useCredentials);
  };

  /////// signuppp
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(
      auth,
      useCredentials.email,
      useCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  /////// signuppp
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(
      auth,
      useCredentials.email,
      useCredentials.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <>
      {isLoading && <FullPageLoader></FullPageLoader>}

      <div className="container login-page">
        <section>
          <h1>Welcome to the Book App</h1>
          <p>Login or create an account to continue</p>
          <div className="login-type">
            <button
              className={`btn ${loginType == "login" ? "selected" : ""}`}
              onClick={() => setLoginType("login")}
            >
              Login
            </button>
            <button
              className={`btn ${loginType == "signup" ? "selected" : ""}`}
              onClick={() => setLoginType("signup")}
            >
              Signup
            </button>
          </div>
          <form className="add-form login">
            <div className="form-control">
              <label>Email *</label>
              <input
                type="text"
                name="email"
                onChange={(e) => handleCredentials(e)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-control">
              <label>Password *</label>
              <input
                onChange={(e) => handleCredentials(e)}
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            {loginType == "login" ? (
              <button
                className="active btn btn-block"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
            ) : (
              <button
                className="active btn btn-block"
                onClick={(e) => handleSignup(e)}
              >
                Sign Up
              </button>
            )}

            {error && <div className="error">{error}</div>}

            <p className="forgot-password">Forgot Password?</p>
          </form>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
