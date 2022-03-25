import React from "react";

const Login = () => {
  return (
    <div
      className="container my-5 text-white"
      style={{ maxWidth: "600px", width: "90%" }}
    >
      <form className="form-signin">
        <img
          className="mb-4"
          src="./high-voltage.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-bold">Sign In</h1>
        <label for="inputEmail" className="sr-only my-3">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" className="sr-only my-3">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox my-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <br />
        <br />
        <button className="btn btn-lg btn-success btn-block" type="submit">
          Demo
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </div>
  );
};

export default Login;
