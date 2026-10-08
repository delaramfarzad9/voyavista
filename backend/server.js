import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";



//  ENVIRONMENT VARIABLES
dotenv.config();


//  DATABASE CONNECTION
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});



//  CREATE EXPRESS APP
const app = express();

const PORT = 3000;


// MIDDLEWARE
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

//  ROUTES
app.get("/experiences",async (req, res) => {
  const { search } = req.query;
  const searchTerm = `%${search || ""}%`;
  console.log("Search:", search);
 try{
const result =await pool.query(`SELECT
    id,
    slug,
    title,
    location,
    region,
    country,
    category,
    description,
    long_description AS "longDescription",
    activities,
    image,
    image_credit AS "imageCredit",
    price,
    price_info AS "priceInfo",
    rating,
    rating_source AS "ratingSource",
    opening_info AS "openingInfo",
    address,
    bookable,
    official_url AS "officialUrl"
  FROM experiences
  WHERE
  title ILIKE $1
  OR location ILIKE $1
  OR region ILIKE $1
  OR country ILIKE $1
  OR category ILIKE $1`,[searchTerm]);
 res.json(result.rows);

 }catch(error){
  console.error(error);
     res.status(500).json({
      message: "Failed to load experiences"
    });
 }
});
app.get("/experiences/:slug", async (req, res) => {
  const { slug } = req.params;

  const result = await pool.query(
  `SELECT * FROM experiences WHERE slug = $1`,
  [slug]
);

console.log(result.rows);
res.json(result.rows[0]);
});

//  START SERVER
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});


