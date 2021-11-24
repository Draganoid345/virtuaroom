import React from "react";
import SideMenu from "../side-menu/SideMenu";
import { useNavigate } from "react-router-dom";
const Settings = (props) => {
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
            <SideMenu/>
            <div className="row align-self-center w-100">
                <div
                    className="col-md-11 mx-auto border bg-white "
                    style={{ borderRadius: "30px" }}
                >
                    <div
                        className="display-2 d-flex justify-content-center "
                        style={{ marginBottom: "85vh", color: "#9c9c9c" }}
                    >
                        Settings
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Settings;
