const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

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

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (firstName, lastName, email, password) VALUES (?,?,?,?)",
    [firstName, lastName, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("successful");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
