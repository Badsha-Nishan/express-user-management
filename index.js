const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const users = [
  { id: 1, name: "Badsha Nishan", email: "khau@dau.com" },
  { id: 2, name: "Shornali Akter", email: "shornali@bornali.com" },
  { id: 3, name: "Aramer Ghum", email: "aram@ghum.com" },
  { id: 4, name: "Petuk Jamai", email: "petuk@jamai.com" },
];

app.get("/", (req, res) => {
  res.send("Hello from users world!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/products", (req, res) => {
  res.send("Products are jumping up!");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
