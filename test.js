import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("HIT");
  res.send("WORKING");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on 5000");
});