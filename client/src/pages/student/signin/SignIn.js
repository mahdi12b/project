import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, videErrors } from "../../../JS/actions/student";
import Errors from "../../../Components/Errors";
import { Link } from "react-router-dom";



import './SignIn.css'

const SignIn = ({ history }) => {
  const [student, setStudent] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.studentReducer);
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
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
      <div className="row d-flex">
        <div className="col-lg-6">
          <div className="card1 border-0 px-4 py-1">
            <img src="https://i.imgur.com/uNGdWHi.png" className="image" />{" "}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card2 card border-0 px-4 py-5 mt-3 ">
            <div className="row mb-4 px-3">
              <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
              <div className="facebook text-center mr-3">
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className="twitter text-center mr-3">
                <i className="fab fa-twitter"></i>
              </div>
              <div className="linkedin text-center mr-3">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="row px-3 mb-4">
              <div className="line" />{" "}
              <small className="or text-center">Or</small>
              <div className="line" />
            </div>

            <div className="row px-3">
              {" "}
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Email Address</h6>
              </label>{" "}
              <input
                className="mb-4"
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="Enter a valid email address"
              />{" "}
            </div>

            <div className="row px-3">
              {" "}
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Password</h6>
              </label>{" "}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter password"
              />{" "}
            </div>
            <div className="row mb-3 px-3">
              {" "}
              <button
                type="submit"
                className="btn btn-blue text-center"
                onClick={() => dispatch(login(student, history))}
              >
                SignIn
              </button>{" "}
            </div>
            <div className="row mb-4 px-3">
              {" "}
              <small className="font-weight-bold">
                Don't have an account?{" "}
               
                  <Link to="/student/signup">Register</Link>{" "}
                
              </small>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignIn;
/*
  <div>
      <div className="bg-img">
        <div className="content">
          <header>Login Form</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user" />S
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
          
         
            <button
            type="submit"
            className="btn btn-blue text-center primary"
            onClick={() => dispatch(login(student, history))}
          >
            SignIn
          </button>{" "}
            
          </form>
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
            Don't have account?
            <a className="text-danger ">
              <Link to="/professor/signup">Register</Link>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  




  <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 border-0 px-4 py-1">
              <img src="https://i.imgur.com/uNGdWHi.png" className="image" />{" "}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5 mt-3 ">
              <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div className="twitter text-center mr-3">
                  <i class="fab fa-twitter"></i>
                </div>
                <div className="linkedin text-center mr-3">
                  <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />{" "}
                <small className="or text-center">Or</small>
                <div className="line" />
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>{" "}
                <input
                  className="mb-4"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter a valid email address"
                />{" "}
              </div>

              <div className="row px-3">
                {" "}
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>{" "}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                />{" "}
              </div>
              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={() => dispatch(login(student, history))}
                >
                  SignIn
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  Don't have an account?{" "}
                  <a className="text-danger ">
                    <Link to="/student/signup">Register</Link>{" "}
                  </a>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */