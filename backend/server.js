import express from "express";
import cors from "cors";
import experiences from "./data/experiences.js"

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));
const PORT = 3000;



app.get("/experiences", (req, res) => {
  res.json(experiences);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});