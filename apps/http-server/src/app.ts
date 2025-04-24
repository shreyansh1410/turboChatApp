import express from "express";

const app = express();
app.use(express.json());

app.post("/signup", (req, res) => {
  res.send("Hello sign up endpoint");
});

app.post("/signin", (req, res) => {
  res.send("Hello sign in endpoint");
});

app.get("/chats", (req, res) => {
  res.send("Hello chats endpoint");
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
