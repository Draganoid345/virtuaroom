const express = require("express");
const mysql = require("mysql");

const app = express()

app.use(express.json());

// const db = mysql.createConnection({
//     user: "edi",
//     host: "localhost",
//     password: "",
//     database: "users",
// });

// app.post('create',(req, res)=>{
//     db.query('INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?,?)',
//         ["Maria","Ioana","edyhogea@yahoo.com","123456789"], (err, result) =>{
//             if (err) {
//                 console.log(err)
//             } else {
//                 res.send("Values inserted")
//             }
//         }
//     );
// });

app.listen(3001,()=> {
  console.log("running server");
});