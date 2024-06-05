const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
const cors = require("cors");
let states = [
  { id: 1, name: "California", code: "CA", status: "Active" },
  { id: 2, name: "New York", code: "NY", status: "Inactive" },
  { id: 3, name: "Texas", code: "TX", status: "Active" },
  { id: 4, name: "Florida", code: "FL", status: "Active" },
  { id: 5, name: "Illinois", code: "IL", status: "Inactive" },
];
app.use(cors());
app.use(bodyParser.json());

app.get("/api/states", (req, res) => {
  res.json(states);
});
app.get("/api/states/:id", (req, res) => {
  const { id } = req.params;
  const state = states.find((state) => state.id === parseInt(id));
  if (state) {
    res.json(state);
  } else {
    res.status(404).json({ message: "State not found" });
  }
});
app.post("/api/states", (req, res) => {
  const newState = req.body;
  states.push(newState);
  res.status(201).json(newState);
});

app.put("/api/states/:id", (req, res) => {
  const { id } = req.params;
  const updatedState = req.body;
  states = states.map((state) =>
    state.id === parseInt(id) ? updatedState : state
  );
  res.json(updatedState);
});

app.delete("/api/states/:id", (req, res) => {
  const { id } = req.params;
  states = states.filter((state) => state.id !== parseInt(id));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
