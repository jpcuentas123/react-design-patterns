// a server with express
import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

let currentUser = {
  name: "Jorge",
  age: 30,
  hairColor: "brown",
  hobbies: ["coding", "reading", "gaming"],
};

let users = [
  {
    id: "1",
    name: "Jorge",
    age: 30,
    hairColor: "brown",
    hobbies: ["coding", "reading", "gaming"],
  },
  {
    id: "2",
    name: "John",
    age: 25,
    hairColor: "black",
    hobbies: ["coding", "reading", "gaming"],
  },
  {
    id: "3",
    name: "Jane",
    age: 20,
    hairColor: "blonde",
    hobbies: ["coding", "reading", "gaming"],
  },
];

const products = [
  {
    name: "Product 1",
    price: 100,
    description: "Product 1 description",
    rating: 4,
  },
  {
    name: "Product 2",
    price: 200,
    description: "Product 2 description",
    rating: 3,
  },
  {
    name: "Product 3",
    price: 300,
    description: "Product 3 description",
    rating: 5,
  },
  {
    name: "Product 4",
    price: 400,
    description: "Product 4 description",
    rating: 4,
  },
];

app.get("/currentUser", (req, res) => {
  res.send(currentUser);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users/:id", (req, res) => {
  const id = req.params.id;
  const { user: updatedUser } = req.body;

  users = users.map((user) => (user.id === id ? updatedUser : user));

  res.send(updatedUser);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products[id];
  res.send(product);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
