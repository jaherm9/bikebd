import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../App";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

const Register = () => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  // email and password field function
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loggedUser };
    newLoginData[field] = value;
    setLoggedUser(newLoginData);
  };
  // email submit function
  const handleLoginSubmit = (e) => {
    if (loggedUser.password !== loggedUser.password2) {
      alert("your password didn't match");
      return;
    }
    registerUser(loggedUser.email, loggedUser.password);
    e.preventDefault();
  };

  // register function
  const auth = getAuth();
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  

  // observer user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user);
      } else {
        setLoggedUser({});
      }
    });
    return () => unsubscribe;
  }, []);
  return (
    <div class="wrapper">
      <form onSubmit={handleLoginSubmit}>
        <h2 class="form-signin-heading">Please Register</h2>
        <label for="Email">Email</label>
        <input onBlur={handleOnBlur} type="email" class="form-control" name="email" required="" autofocus="" />
        <br />
        <label for="Password">Password</label>
        <input onBlur={handleOnBlur} type="password" class="form-control" name="password" required="" />
        <br />
        <label for="Password"> Confirm Password</label>
        <input onBlur={handleOnBlur} type="password" class="form-control" name="password2" required="" />
        <br />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
      <NavLink to="/login" style={{ textDecoration: "none" }}>
        {" "}
        Already registered? Sign in{" "}
      </NavLink>
    </div>
  );
};

export default Register;
