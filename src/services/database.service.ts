// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import logger from "../utils/logger";
// Global Variables
export const collections: { stocks ?: mongoDB.Collection } = {}
// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(<string>process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const gamesCollection: mongoDB.Collection = db.collection(<string>process.env.STOCK_COLLECTION_NAME);
 
  collections.stocks = gamesCollection;
       
         logger.info(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
 }