const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

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

app.post("/users", (req, res) => {
  console.log("Post method is working", req.body);
  const newUsers = req.body;
  newUsers.id = users.length + 1;
  users.push(newUsers);
  res.send({
    success: true,
    data: newUsers,
    message: "Post method is working",
    
  });
});

app.get("/products", (req, res) => {
  res.send("Products are jumping up!");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
