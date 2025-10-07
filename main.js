import express from "express";
const app = express();
const port = 3000;
const pizzas = [
  { nome: "Margherita", prezzo: 6.5, calorie: 700 },
  { nome: "Diavola", prezzo: 8, calorie: 850 },
  { nome: "Quattro Formaggi", prezzo: 9, calorie: 950 },
  { nome: "Prosciutto e Funghi", prezzo: 8.5, calorie: 820 },
];

app.get("/", (req, res) => {
  res.send("Ciao cocco");
});

//INDEX
app.get("/pizzas", function (req, res) {
  res.send("List of pizzas");
});

//SHOW
app.get("/pizzas/:id", function (req, res) {
  res.send("Details of one pizza" + req.params.id);
});

//STORE
app.post("/pizzas", function (req, res) {
  res.send("Make a new pizza");
});

//UPDATE
app.put("/pizzas/:id", function (req, res) {
  res.send("Modify the entire pizza" + req.params.id);
});

//MODIFY
app.patch("/pizzas/:id", function (req, res) {
  res.send("Modify a part of the pizza" + req.params.id);
});

//DESTROY
app.delete("/pizzas/:id", function (req, res) {
  res.send("Delete the pizza" + req.params.id);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
