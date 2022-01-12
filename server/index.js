const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express()


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

    user: "root",
    host: "localhost",
    password: "password",
    database: "users",
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


app.post('/register',(req, res)=>{

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    db.query('INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)',
        [firstName,lastName,email,password], (err, result) =>{
            if (err) {
                console.log(err)

            } else {
                res.send("Values inserted")
            }
        }
    );

});

app.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (err,result) => {
            if (err){
                res.send({err: err});

        }
            if (result.length>0){
                res.send(result);

            } else{
                res.send({message: "Wrong email/password combination"})

                }
            }
        );


})

app.post('/bookings', (req, res)=>{

    const data = req.body.data;
    const username = req.body.username;
    const room_type = req.body.room_type;
    db.query(
        'INSERT INTO bookings (date, user, room_type) VALUES(?,?,?)',
        [data,username, room_type],
        (err, result) =>{
            if (err) {
                console.log(err)

            } else {
                res.send("Values inserted")
            }
        }
    );

})

app.post('/account', (req, res)=>{
    const username = req.body.username;
    db.query(
        'SELECT * FROM bookings WHERE user = ?',
        [username],
        (err,result) => {
            if (err){
                res.send({err: err});
            }
            if (result.length>0){
                res.send(result);
            } else{
                res.send({message: "Wrong email/password combination"})

            }
        }
    );
})



app.listen(3001,()=> {
    console.log("running server");

});
