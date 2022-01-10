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
    };

    let navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    //console.log(startDate.getMonth());
    console.log(startDate.toISOString());

    const [open, setOpen] = useState(false);
    const handleOpenDate = () => setOpen(true);
    const handleCloseDate = () => setOpen(false);

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
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={handleOpenDate}>Choose Date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleCloseDate}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}

                                                        inline
                                                    />
                                                    <Button>Book Now</Button>
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
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={handleOpenDate}>Choose Date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleCloseDate}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}

                                                        inline
                                                    />
                                                    <Button>Book Now</Button>
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
                                            image={process.env.PUBLIC_URL + "/assets/fundal5.jpg"}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={handleOpenDate}>Choose Date</Button>
                                            <Modal
                                                open={open}
                                                onClose={handleCloseDate}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}

                                                        inline
                                                        minDate={new Date()}
                                                    />
                                                    <Button>Book Now</Button>
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
