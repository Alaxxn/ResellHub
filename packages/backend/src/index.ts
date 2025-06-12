import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { ValidRoutes } from "./shared/ValidRoutes";
import {connectMongo} from "./connectMongo";
import {PostProvider} from "./PostProvider";

dotenv.config(); 
const PORT = process.env.PORT || 3000;
const STATIC_DIR = process.env.STATIC_DIR || "public";
const resolvedStaticDir = path.resolve(process.cwd(), STATIC_DIR);
const app = express();
const mongoClient = connectMongo();
const postProvider = new PostProvider(mongoClient);



app.use(express.static(STATIC_DIR));

app.get("/api/hello", (req: Request, res: Response) => {
    res.send("Hello, World");
});

Object.values(ValidRoutes).forEach((route) => {
  app.get(route, (req, res, next) => {
    res.sendFile(path.join(resolvedStaticDir, "index.html"), (err) => {
      if (err) {
        next(err);
      }
    });
  });
});

app.get("/api/post", async (req: Request, res: Response) => {
    function waitDuration(numMs: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, numMs));
    }
    const wait = await waitDuration(1000);
    const data = await postProvider.getAllPost()
    res.send(data);
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
