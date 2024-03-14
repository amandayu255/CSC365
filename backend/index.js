import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "recipe"
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/Household", (req, res) => {
    const q = "SELECT * FROM Household"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/GroceryStore", (req, res) => {
    const q = "SELECT * FROM GroceryStore"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Products", (req, res) => {
    const q = "SELECT * FROM Products"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/ShoppingHist", (req, res) => {
    const q = "SELECT * FROM ShoppingHist"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Grocery", (req, res) => {
    const q = "SELECT * FROM Grocery"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Recipe", (req, res) => {
    const q = "SELECT * FROM Recipe"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Instructions", (req, res) => {
    const q = "SELECT * FROM Instructions"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/RecipeIngred", (req, res) => {
    const q = "SELECT * FROM RecipeIngred"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/CookHist", (req, res) => {
    const q = "SELECT * FROM CookHist"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/NutritionLabel", (req, res) => {
    const q = "SELECT * FROM NutritionLabel"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Nutrition", (req, res) => {
    const q = "SELECT * FROM Nutrition"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})