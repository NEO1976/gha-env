import { MongoClient } from 'mongodb';

const clusterAddress = process.env.MONGODB_CLUSTER_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

/*try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}*/

const database = client.db(dbName);
const { MongoClient } = require('mongodb');


async function run() {
  // 1. Zuerst aktiv auf die Verbindung warten
  await client.connect(); 
  
  // 2. Erst danach Operationen ausführen
  const db = client.db(dbName);
  const docs = await db.collection('user').find({}).toArray();
  console.log(docs);
}
run();

export default database;
