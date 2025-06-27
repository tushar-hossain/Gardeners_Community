require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@gardening.5ksfpug.mongodb.net/?retryWrites=true&w=majority&appName=Gardening`;

app.use(cors());
app.use(express.json());

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Gardening Community & Resource Hub Server</h1>");
});

// database
const gardenersDB = client.db("gardener").collection("gardeners");
const tipsDB = client.db("gardener").collection("tips");
const usersDB = client.db("gardener").collection("users");
const gardenerCollection = client.db("gardener").collection("explores");
const eventsCollection = client.db("gardener").collection("events");

async function run() {
  try {
    // await client.connect();

    // get 6 active gardeners
    app.get("/gardeners", async (req, res) => {
      const query = { status: "active" };
      const result = await gardenersDB.find(query).toArray();
      res.send(result);
    });

    //   get all gardeners
    app.get("/all-gardeners", async (req, res) => {
      const result = await gardenersDB.find().toArray();
      res.send(result);
    });

    // one gardeners
    app.get("/gardeners/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await gardenersDB.findOne(query);
      res.send(result);
    });

    // all tips gardeners
    app.get("/tips/like", async (req, res) => {
      const result = tipsDB.find().sort({ like: -1 }).limit(8);
      res.send(await result.toArray());
    });

    // explore-gardeners
    app.get("/explore-gardeners", async (req, res) => {
      try {
        const gardeners = await gardenerCollection
          .find()
          .sort({ joinedDate: -1 })
          .toArray();
        res.send(gardeners);
      } catch (error) {
        res.status(500).json({ message: "Failed to fetch gardeners" });
      }
    });

    // post explore-gardeners
    app.post("/explore-gardeners", async (req, res) => {
      try {
        const gardener = req.body;

        const result = await gardenerCollection.insertOne(gardener);
        res.send(result);
      } catch (error) {
        res.status(500).json({ message: "Failed to add gardener" });
      }
    });

    //   public garden tips
    app.get("/public-tips", async (req, res) => {
      const query = { availability: "Public" };
      const result = await tipsDB.find(query).toArray();
      res.send(result);
    });

    //   get public tips by id
    app.get("/public-tips/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await tipsDB.find(query).toArray();
      res.send(result);
    });

    //   share a garden tips
    app.post("/tips", async (req, res) => {
      const doc = req.body;
      const result = await tipsDB.insertOne(doc);
      res.send(result);
    });

    // get a one gardeners tips
    app.get("/tips/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await tipsDB.findOne(query);
      res.send(result);
    });

    // update gardeners tips
    app.put("/tips/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: req.body,
      };
      const result = await tipsDB.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // like update
    app.patch("/tips/:id", (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) };
      const result = tipsDB.updateOne(filter, { $inc: { like: 1 } });
      res.send(result);
    });

    // delete gardeners tips
    app.delete("/tips/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) };
      const result = await tipsDB.deleteOne(filter);
      res.send(result);
    });

    // get email public garden tips
    app.get("/email-tips/:email", async (req, res) => {
      const query = { email: req.params.email };
      const result = await tipsDB.find(query).toArray();
      res.send(result);
    });

    //   post user bd
    app.post("/users", async (req, res) => {
      const doc = req.body;
      const result = await usersDB.insertOne(doc);
      res.send(result);
    });

    app.get("/events", async (req, res) => {
      const result = await eventsCollection.find().toArray();
      res.send(result);
    });
    app.get("/events/:id", async (req, res) => {
      const result = await eventsCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
