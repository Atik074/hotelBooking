import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGOOSE_CONNECTOR;

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let mongoClientPromise;

if (!process.env.MONGOOSE_CONNECTOR) {
  throw new Error('Invalid/Missing environment variable: "MONGOOSE_CONNECTOR"');
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

export default mongoClientPromise;
