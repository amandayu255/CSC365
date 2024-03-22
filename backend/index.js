import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "recipe",
});

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    `SELECT * FROM User WHERE email = '${email}' AND password = '${password}'`,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        if (result[0].password === password && result[0].email === email) {
          res.send(true)
        } else {
          res.send(false)
        }
      }
    }
  );
});

app.get("/Household", (req, res) => {
  const q = "SELECT * FROM Household";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/GroceryStore", (req, res) => {
  const q = "SELECT * FROM GroceryStore";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// app.get("/SpecificStore/:storeid", (req, res) => {
//   console.log("Specific store id:", req.params.storeid);
//   const q = `SELECT * FROM Products WHERE store_id = ${req.params.storeid}`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     console.log("Data:", data);
//     return res.json(data);
//   });
// });

app.get("/SpecificStore/:storeid", (req, res) => {
  // console.log("Specific store id:", req.params.storeid);

  const storeQuery = `SELECT name, street_address, city, state, zip_code FROM GroceryStore WHERE store_id = ${req.params.storeid}`;
  const productQuery = `SELECT * FROM Products WHERE store_id = ${req.params.storeid}`;

  db.query(storeQuery, (err, storeData) => {
    if (err) {
      console.error("Error fetching store data:", err);
      return res.status(500).json({ error: "Error fetching store data" });
    }

    db.query(productQuery, (err, productData) => {
      if (err) {
        console.error("Error fetching products:", err);
        return res.status(500).json({ error: "Error fetching products" });
      }

      const responseData = {
        storeInfo: storeData[0], // Assuming only one store info is returned
        products: productData,
      };

      console.log("Data:", responseData);
      return res.json(responseData);
    });
  });
});


app.get("/Products", (req, res) => {
  const q = "SELECT * FROM Products";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/ShoppingHist", (req, res) => {
  const q = "SELECT * FROM ShoppingHist";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/Grocery", (req, res) => {
  const q = "SELECT * FROM Grocery";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/Recipe", (req, res) => {
  const q = "SELECT * FROM Recipe";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/Recipe", (req, res) => {
  console.log("Request body:", req.body);
  console.log(req.body.userID)
  const q = "INSERT INTO Recipe (`recipe_id`, `name`, `created_by_user`, `cuisine`, `time_minutes`) VALUES (?)"
  const values = [
    req.body.recipe_id,
    req.body.name,
    req.body.created_by_user,
    req.body.cuisine,
    req.body.time_minutes,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
});

app.get("/SpecificRecipe/:recipeid", (req, res) => {
  console.log("Specific recipe id:", req.params.recipeid);
  const p = `SELECT * FROM Recipe WHERE recipe_id = ${req.params.recipeid}`;
  const q = `SELECT * FROM RecipeIngred WHERE recipe_id = ${req.params.recipeid}`;
  const r = `SELECT * FROM Instructions WHERE recipe_id = ${req.params.recipeid}`;
  const s = `SELECT * FROM NutritionLabel WHERE recipe_id = ${req.params.recipeid}`;

  db.query(p, (err, recipeData) => {
    if (err) {
      console.error("Error fetching recipe:", err);
      return res.status(500).json({ error: "Error fetching recipe" });
    }

    db.query(q, (err, ingredientData) => {
      if (err) {
        console.error("Error fetching ingredients:", err);
        return res.status(500).json({ error: "Error fetching ingredients" });
      }

      db.query(r, (err, instructionData) => {
        if (err) {
          console.error("Error fetching instructions:", err);
          return res.status(500).json({ error: "Error fetching instructions" });
        }

        db.query(s, (err, nutritionLabelData) => {
          if (err) {
            console.error("Error fetching nutrition labels:", err);
            return res
              .status(500)
              .json({ error: "Error fetching nutrition labels" });
          }

          const responseData = {
            recipe: recipeData[0],
            ingredients: ingredientData,
            instructions: instructionData,
            nutritionLabels: nutritionLabelData,
          };

          console.log("Data:", responseData);
          return res.json(responseData);
        });
      });
    });
  });
});

app.get("/Instructions", (req, res) => {
  const q = "SELECT * FROM Instructions";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/RecipeIngred", (req, res) => {
  const q = "SELECT * FROM RecipeIngred";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/CookHist", (req, res) => {
  const q = "SELECT * FROM CookHist";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/NutritionLabel", (req, res) => {
  const q = "SELECT * FROM NutritionLabel";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/Nutrition", (req, res) => {
  const q = "SELECT * FROM Nutrition";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
