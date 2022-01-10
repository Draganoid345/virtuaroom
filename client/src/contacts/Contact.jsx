import React from "react";
import SideMenu from "../side-menu/SideMenu";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from 'google-map-react'
import Map from "./Map";


const location = {
    address: 'Coriolan Brediceanu nr 2',
    lat: 45.7562981,
    lng: 21.2265894,
}

const Contacts = (props) => {
    let navigate = useNavigate();
    return (
        <>

            <div
                className="container-fluid d-flex "
                style={{
                    marginTop:"0px",
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
                            style={{ color: "#9c9c9c" }}
                        >
                            Contacts
                        </div>
                        <Map location={location} zoomLevel={17} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contacts;
