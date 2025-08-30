const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

let events = [];

app.post("/events", (req, res) => {
  events.push(req.body);
  res.send({ message: "Event added" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(3000, () => console.log("Server running"));
