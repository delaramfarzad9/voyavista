import express from "express";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

app.get("/experiences", (req, res) => {
  res.json({ message: "VoyaVista experiences API" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

server.on("error", (error) => {
  console.error("SERVER ERROR:", error);
});

server.on("close", () => {
  console.log("SERVER CLOSED");
});