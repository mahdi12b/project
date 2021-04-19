import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../../JS/actions/student";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./SignIn.css";

const SignIn = ({ history }) => {
  const [student, setStudent] = useState({});

  const dispatch = useDispatch();

  const errors = useSelector((state) => state.studentReducer.errors);
  console.log(errors);
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);

  return (
    <div>
      <div className="bg-img">
        <div className="content">
          <header>Student Login</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user" />
              <input
                className="mb-4"
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter a valid email address"
              />{" "}
            </div>
            <div className="field space">
              <span className="fa fa-lock" />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter password"
              />{" "}
              <span className="show">SHOW</span>
            </div>
            <Button
              style={{ marginTop: 30, marginBottom: 15 }}
              type="submit"
              className="btn btn-blue text-center primary"
              onClick={(e) => {
                e.preventDefault();
                dispatch(login(student, history));
              }}
            >
              SignIn
            </Button>{" "}
          </form>

          <div className="signup">
            Don't have account?
            <a className="text-danger ">
              <Link style={{ color: "#dd4040" }} to="/student/signup">
                Register
              </Link>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

/*
<div className="login">Or login with</div>
<div className="links">
  <div className="facebook">
    <i className="fab fa-facebook-f">
      <span>Facebook</span>
    </i>
  </div>
  <div className="instagram">
    <i className="fab fa-instagram">
      <span>Instagram</span>
    </i>
  </div>
</div>
<div className="signup">
  Don't have account?*/
