import React from "react";
import { Form, Button } from "react-bootstrap";
import "./LogIn.style.css";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
const LogIn = (props) => {
  return (
    <>
      <div
        className="container-fluid d-flex "
        style={{
          height: "100vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <div className="row align-self-center w-100">
          <div
            className="col-md-4 mx-auto border bg-white "
            style={{ borderRadius: "30px" }}
          >
            <Form style={{ margin: "20vh 3vh" }}>
              <div
                className="display-2 d-flex justify-content-center "
                style={{ marginBottom: "50px", color: "#9c9c9c" }}
              >
                Log In
              </div>

              {/*<Form.Group>*/}
              {/*  <Form.Control*/}
              {/*    className="input-field"*/}
              {/*    type="email"*/}
              {/*    placeholder="Email"*/}
              {/*  />*/}
              {/*  <AlternateEmailIcon />*/}
              {/*</Form.Group>*/}

              <div className="input-group mb-3 signup">
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{
                    backgroundColor: "white",
                    borderRight: "0",
                    borderRadius: "30px 0 0 30px",
                  }}
                >
                  <AlternateEmailIcon style={{ color: "#9c9c9c" }} />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  style={{ borderLeft: "0", borderRadius: "0px 30px 30px 0" }}
                />
              </div>
              <div className="input-group mb-3 signup">
                <span
                  className="input-group-text "
                  id="basic-addon2"
                  style={{
                    backgroundColor: "white",
                    borderRight: "0",
                    borderRadius: "30px 0 0 30px",
                  }}
                >
                  <PasswordIcon style={{ color: "#9c9c9c" }} />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  style={{ borderLeft: "0", borderRadius: "0px 30px 30px 0" }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
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

export default LogIn;
