import React from "react";
import SideMenu from "../side-menu/SideMenu";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DatePicker from "react-datepicker";


const Account = (props) => {

    const[username,setUsername] = useState(window.localStorage.getItem("username"))
    const[room,setRooms] = useState('')
    const [noRooms, setNoRooms] = useState(true);

    const account = () => {
        Axios.post('http://localhost:3001/account', {
            username: username,
        }).then((response) => {
            if(response.data.length > 0) {
                setNoRooms(false);
                setRooms(response.data);
                console.log(response.data);
            }
        });
    };

    const picture = (tipul) => {
        if(tipul === "small")
            return ("/assets/fundal5.jpg")
        if(tipul === "medium")
            return ("/assets/fundal4.jpg")
        if(tipul === "big")
            return ("/assets/fundal3.jpg")
    }

    const room_title = (tipul) => {
        if(tipul === "small")
            return ("Small room")
        if(tipul === "medium")
            return ("Medium room")
        if(tipul === "big")
            return ("Big room")
    }

    useEffect(() => {
        account();
    }, [])
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
                            style={{ marginBottom: "10vh", color: "#9c9c9c" }}
                        >
                            Account
                        </div>
                        {noRooms ? (
                            <h2>No bookings Yet.</h2>
                        ) : (
                            <Box sx={{flexGrow: 1}}>
                                <Grid container justifyContent="center" spacing={2}>
                                {Object.keys(room).map((key, index) => (
                                        <Grid item xs={4}>
                                            <Card sx={{maxWidth: 600}}>
                                                <CardMedia
                                                    component="img"
                                                    height="500"
                                                    image={process.env.PUBLIC_URL + picture(room[index].room_type)}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {room_title(room[index].room_type)}
                                                    </Typography>
                                                    {/*<Typography variant="body2" color="text.secondary">*/}
                                                    {/*    */}
                                                    {/*</Typography>*/}
                                                    <h2>{room[index].date}</h2>
                                                </CardContent>

                                            </Card>
                                        </Grid>
                                ))}
                                </Grid>
                        </Box>

                        )}
                        <br/>
                        <br/><br/><br/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Account;
