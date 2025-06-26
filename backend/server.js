const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const { ObjectId } = require("mongodb");

const PORT = 5050;

const MONGO_URL = process.env.MONGO_URL || "mongodb://admin:error@mongo:27017";
const client = new MongoClient(MONGO_URL);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/ping", (req, res) => {
  res.send("pong");
});

//GET all users
app.get("/getUsers", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("college-db");
    const data = await db.collection("users").find({}).toArray();
    await client.close();
    res.send(data);
  } catch (err) {
    console.error("Error in /getUsers:", err);
    res.status(500).send("Error retrieving users");
  }
});

//POST new user
app.post("/addUser", async (req, res) => {
  const userObj = req.body;
  console.log(req.body);
  await client.connect(URL);
  console.log("Connected successfully to server");

  const db = client.db("college-db");
  const data = await db.collection("users").insertOne(userObj);
  console.log(data);
  console.log("data inserted in DB");
  client.close();
});

// DELETE user by ID
app.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  await client.connect(MONGO_URL);
  const db = client.db("college-db");
  const result = await db
    .collection("users")
    .deleteOne({ _id: new ObjectId(id) });
  client.close();
  res.send({ deleted: result.deletedCount > 0 });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
