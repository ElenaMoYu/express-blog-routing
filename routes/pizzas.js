import express from "express";
const router = express.Router();

const posts = [
  { id: 1, title: "Welcome to my blog", content: "This is the first post." },
  { id: 2, title: "Second post", content: "Some more interesting content." },
  { id: 3, title: "Third post", content: "Another example post." },
];

router.get("/", (req, res) => {
  res.send("List of posts");
});

router.get("/:id", (req, res) => {
  res.send("Details of post " + req.params.id);
});

router.post("/", (req, res) => {
  res.send("Create a new post");
});

router.put("/:id", (req, res) => {
  res.send("Full update of post " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Delete post " + req.params.id);
});

export default router;
