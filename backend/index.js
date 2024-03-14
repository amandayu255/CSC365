import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "idk", // video at 13:00
    database: "recipe"
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

// table name 
app.get("/Recipe", (req, res) => {
    const q = "SELECT * FROM Recipe"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})