import classes from "./Login.module.css";
import React, { useRef, useContext, useState } from "react";
import AuthContext from "./auth-context";
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [loading, setLoaiding] = useState(false);
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setLoaiding(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBO-uWvkbDxYCjipLzXz0ZulQvNenR57ww",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authrntication filed!";

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      }).then((data) => {
        console.log(data);
        authCtx.login(data.idToken, enteredEmail);
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Email</label>
          <br />
          <input
            type="text"
            id="username"
            placeholder="name@example.com"
            required
            ref={emailInputRef}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div>
          <button type="submit">login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;