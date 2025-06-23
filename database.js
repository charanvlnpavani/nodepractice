const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://pavanicharanvln:0a2NeIgZ5lrqE1iG@namastenode.xxovjkh.mongodb.net/";

const client = new MongoClient(url);

const dbName = "helloworld";
const data = [{ name: "Siva", place: "Hyderabad", phoneNumber: 9870054321 }];

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // Insert a document
  const insertResult = await collection.insertMany(data);
  console.log("Inserted documents =>", insertResult);

  // Find a document
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return " done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
