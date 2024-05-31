const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let todos = [
  {
    name: "pattaraporn",
    lastname: "sanorit",
  },
  {
    name: "pattarapornnnnn",
    lastname: "sanorittttt",
  },
];

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.post("/todos", (req, res) => {
  const todo = { id: Date.now(), ...req.body };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== parseInt(id));
  res.status(204).send();
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === parseInt(id));
  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    res.status(200).json(todos[index]);
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
