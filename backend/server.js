import express from "express";

const app = express();
const PORT = 3000;

const experiences = [
  {
    id: 1,
    title: "London Food Walking Tour",
    city: "London",
    category: "Food",
    price: 45,
    rating: 4.8,
    available: true,
  },
  {
    id: 2,
    title: "Cotswolds Cycling Experience",
    city: "Moreton-in-Marsh",
    category: "Outdoor",
    price: 65,
    rating: 4.7,
    available: true,
  },
];

app.get("/experiences", (req, res) => {
  res.json(experiences);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});