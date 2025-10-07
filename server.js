import express from "express";
import postsRouter from "./routers/posts.js";

const app = express();
const port = 3000;

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
