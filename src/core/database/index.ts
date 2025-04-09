import mongoose from "mongoose";

class Database {
  private dbUrl: string;

  constructor(dbUrl: string) {
    this.dbUrl = dbUrl;
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.dbUrl, { dbName: "profile-service" });
      console.log("DB Connected");
    } catch (error) {
      console.log("DB Connection error");

      process.exit(1);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log("DB Connection closed");
    } catch (error) {
      console.log("DB Connection closed error");
    }
  }
}

export default Database;
