import { config } from "dotenv";
import Server from "./app/express";
import Database from "./core/database";
const PORT = process.env.PORT || 3002;
config();

const db = new Database(process.env.DATABASE_URL as string);
console.log(db);
db.connect();


const expressServer = new Server();



expressServer.start(PORT);




