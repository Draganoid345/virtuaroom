import React from "react";
import { Form, Button } from "react-bootstrap";
import SideMenu from "../side-menu/SideMenu";
import { useNavigate } from "react-router-dom";

import {useState} from "react";
import Axios from 'axios';

const SignUp = (props) => {

    const [emailReg, setEmailReg] = useState('')
    const [firstNameReg, setfirstNameReg] = useState('')
    const [lastNameReg, setlastNameReg] = useState('')
    const [passwordReg, setpasswordReg] = useState('')

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };
    let navigate = useNavigate();

  return (
    <>
      <div
        className="container-fluid d-flex "
        style={{
          height: "100vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <SideMenu />
        <div className="row align-self-center w-100">
          <div
            className="col-md-4 mx-auto border bg-white "
            style={{ borderRadius: "30px" }}
          >
            <Form style={{ margin: "5vh 3vh" }}>
              <div
                className="display-2 d-flex justify-content-center "
                style={{ marginBottom: "50px", color: "#9c9c9c" }}
              >
                Sign Up
              </div>

              <div className="input-group mb-3 signup">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  aria-label="First name"
                  style={{ borderRadius: "30px " }}

                  onChange={(e)=>{setfirstNameReg(e.target.value)}}

                />
              </div>
              <div className="input-group mb-3 signup">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                  style={{ borderRadius: "30px " }}

                  onChange={(e)=>{setlastNameReg(e.target.value)}}

                />
              </div>
              <div className="input-group mb-3 signup">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon3"
                  style={{ borderRadius: "30px " }}

                  onChange={(e)=>{setEmailReg(e.target.value)}}

                />
              </div>
              <div className="input-group mb-3 signup">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon4"
                  style={{ borderRadius: "30px " }}

                  onChange={(e)=>{setpasswordReg(e.target.value)}}

                />
              </div>
              <div className="input-group mb-3 signup">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  aria-describedby="basic-addon5"
                  style={{ borderRadius: "30px " }}

                  onChange={(e)=>{setpasswordReg(e.target.value)}}

                />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#03DAC5",
                    borderRadius: "45px",
                    borderColor: "#03DAC5",
                    width: "60%",
                    height: "60px",
                    fontSize: "30px",
                    fontWeight: "100",
                    marginTop: "30px",
                    paddingBottom: "10px",
                  }}
                  id="submit-button"
                  onClick={register}
                >
                  Sign Up
                </Button>
              </div>
              <br />
              <br />
              <div className="d-flex justify-content-center">
                <div className="display-6">Already have an account?</div>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="secondary"
                  type="submit"
                  style={{
                    backgroundColor: "#666666",
                    borderRadius: "45px",
                    borderColor: "#666666",
                    width: "60%",
                    height: "60px",
                    fontSize: "30px",
                    fontWeight: "100",
                    marginTop: "30px",
                    paddingBottom: "10px",
                  }}
                  id="submit-button"
                  onClick={() => {

                      navigate("/log-in");
                  }}

                >
                  Log In
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
