import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/"> {"<<"} Về</Link>
        </div>
      </form>
    </div>
  );
}
