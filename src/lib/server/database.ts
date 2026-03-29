import { MongoClient } from "mongodb";
import { MONGODB_URI } from "$env/static/private";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

let instanceMongoClient: MongoClient;

if (import.meta.env.DEV) {
  type Global = typeof globalThis & {
    _instanceMongoClient?: MongoClient;
  };

  const global: Global = globalThis;

  if (!global._instanceMongoClient) {
    global._instanceMongoClient = new MongoClient(MONGODB_URI);
  }

  instanceMongoClient = global._instanceMongoClient;
} else {
  instanceMongoClient = new MongoClient(MONGODB_URI);
}

export const client = instanceMongoClient;
export const db = client.db();
