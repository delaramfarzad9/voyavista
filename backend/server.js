import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
import experiences from "./data/experiences.js";


//  ENVIRONMENT VARIABLES
dotenv.config();


//  DATABASE CONNECTION
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// temporrat test 
pool.query("SELECT NOW()")
  .then((result) => {
    console.log("Database connected:", result.rows[0]);
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

//  CREATE EXPRESS APP
const app = express();

const PORT = 3000;


// MIDDLEWARE
app.use(cors({
  origin: "http://localhost:5173"
}));


//  ROUTES
app.get("/experiences", (req, res) => {
  res.json(experiences);
});


//  START SERVER
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});