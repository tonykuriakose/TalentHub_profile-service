import express, { Application, Request, Response } from "express";

class Server {
  public app: Application;
  private server: any;

  constructor() {
    this.app = express();
    this.initialize();
    this.setupRoutes();
  }

  async initialize() {
    try {
      console.log("Initializing server");
    } catch (error) {
      console.error("Error during initialization", error);
    }
  }

  
  private setupRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "Profile API is working fine!" });
    });
  }

  start(PORT: string | number) {
    this.server = this.app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  }
}

export default Server;
