import React from "react";
import SideMenu from "../side-menu/SideMenu";
import {useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker";
import {useState} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Form, Button} from "react-bootstrap";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Modal from '@mui/material/Modal';
import Axios from "axios";


const Bookings = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: 'column',
        //alignItems: 'flex-start',
        justifyContent: "center",
        borderRadius: "10px",
    };

    let navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [selectedRoom, setSelectedRoom] = useState("");
    //console.log(startDate.getMonth());
    console.log(startDate.toISOString());

    const [open, setOpen] = useState(false);
    const handleOpenDate = () => setOpen(true);
    const handleCloseDate = () => setOpen(false);

    const [data, setData] = useState(new Date());
    const [username, setUserName] = useState(window.localStorage.getItem("username"));

    const handleBooking = () => {
        Axios.post('http://localhost:3001/bookings', {
            data: data.toUTCString(),
            username: username,
            room_type: selectedRoom,
        }).then((response) => {
            if (response.data.message) {
                console.log(response.data.message);
            }
        });
        handleCloseDate();
    }


    const bull = (
        <Box
            component="span"
            sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
        >
            •
        </Box>
    );
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
                        style={{borderRadius: "30px"}}
                    >
                        <div
                            className="display-2 d-flex justify-content-center "
                            style={{marginBottom: "10vh", color: "#9c9c9c"}}
                        >
                            Bookings

                        </div>

                        <Box sx={{flexGrow: 1}}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={4}>
                                    <Card sx={{maxWidth: 600}}>
                                        <CardMedia
                                            component="img"
                                            height="500"
                                            image={process.env.PUBLIC_URL + "/assets/fundal5.jpg"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Small room
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis maximus velit, nec pulvinar diam posuere vel. Quisque iaculis nunc ac viverra convallis. Pellentesque velit urna, viverra eu ullamcorper vel, ornare sed quam. Donec tempor, nisl vel pulvinar maximus, dui ex eleifend arcu, a tempor urna purus vitae leo.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => {
                                                setOpen(true)
                                                setSelectedRoom("small");
                                            }}>Choose Date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleCloseDate}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <DatePicker
                                                        selected={data}
                                                        onChange={(date) => {
                                                            setData(date)
                                                        }}

                                                        inline

                                                        showTimeSelect
                                                        minDate={new Date()}

                                                    />
                                                    <Button onClick={handleBooking}>Book Now</Button>
                                                </Box>
                                            </Modal>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{maxWidth: 600}}>
                                        <CardMedia
                                            component="img"
                                            height="500"
                                            image={process.env.PUBLIC_URL + "/assets/fundal4.jpg"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Medium room
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Cras mattis quam at ligula pellentesque, eget posuere nisi euismod. Nulla rutrum laoreet sapien, sed cursus urna sollicitudin non. Sed efficitur massa tempor urna mollis, et placerat enim venenatis. Nunc metus erat, dapibus ultrices neque sed, vehicula auctor erat.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => {
                                                setOpen(true)
                                                setSelectedRoom("medium");
                                            }}>Choose Date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleCloseDate}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <DatePicker
                                                        selected={data}
                                                        onChange={(date) => {
                                                            setData(date)

                                                        }}

                                                        inline

                                                        showTimeSelect
                                                        minDate={new Date()}

                                                    />
                                                    <Button onClick={handleBooking}>Book Now</Button>
                                                </Box>
                                            </Modal>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{maxWidth: 600}}>
                                        <CardMedia
                                            component="img"
                                            height="500"
                                            image={process.env.PUBLIC_URL + "/assets/fundal3.jpg"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Big room
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Nullam congue risus cursus lacinia imperdiet. Quisque accumsan vulputate cursus. Curabitur eu enim id lectus fermentum mattis placerat cursus orci. Fusce scelerisque leo sollicitudin felis tempus, eu vestibulum arcu bibendum congue risus cursus.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => {
                                                setOpen(true)
                                                setSelectedRoom("big");
                                            }}>Choose Date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleCloseDate}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <DatePicker
                                                        selected={data}
                                                        onChange={(date) => {
                                                            setData(date)
                                                        }}

                                                        inline

                                                        showTimeSelect
                                                        minDate={new Date()}

                                                    />
                                                    <Button onClick={handleBooking}>Book Now</Button>
                                                </Box>
                                            </Modal>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookings;
