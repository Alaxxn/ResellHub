import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { ValidRoutes } from "./shared/ValidRoutes";
import {fetchDataFromServer} from "./shared/MockAppData"


dotenv.config(); // Read the .env file in the current working directory, and load values into process.env.
const PORT = process.env.PORT || 3000;
const STATIC_DIR = process.env.STATIC_DIR || "public";
const resolvedStaticDir = path.resolve(process.cwd(), STATIC_DIR);


const app = express();

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

app.get("/api/post", (req: Request, res: Response) => {
    res.send(fetchDataFromServer());
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
