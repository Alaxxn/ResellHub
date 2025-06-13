import express, { Request, Response } from "express";
import multer from "multer";
import path from "path";
import { PostProvider } from "../PostProvider";
import { ObjectId } from "mongodb";

import fs from "fs"; // add this at the to

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "..", "..", "images") // resolves to backend/images
    console.log("Uploading files to:", uploadPath);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });


export function registerImageRoutes(app: express.Application, postProvider: PostProvider) {

  app.get("/api/post", async (req: Request, res: Response) => {
    function waitDuration(numMs: number): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, numMs));
    }
    await waitDuration(1000);
    const data = await postProvider.getAllPost();
    res.send(data);
  });

  app.post( "/api/post", upload.array("photos"), async (req: Request, res: Response) => {
        const body = req.body;
        const files = req.files as Express.Multer.File[];
        console.log("Received files:", files.map(f => f.filename));
      if (
        typeof body.username !== "string" ||
        typeof body.title !== "string" ||
        !["electronics", "clothing", "other"].includes(body.category) ||
        typeof body.description !== "string" ||
        isNaN(Number(body.price)) ||
        !files ||
        files.length === 0
      ) {
        res.status(400).json({ error: "Invalid post format or missing images" });
      }else{

      const imagePaths = files.map((file) => file.filename);

      const newPost = {
        _id: new ObjectId(),
        usernameId: body.username,
        title: body.title,
        category: body.category,
        price: parseFloat(body.price),
        description: body.description,
        images: imagePaths,
      };

      try {
        const inserted = await postProvider.insertPost(newPost);
        res.status(201).json({ 
          insertedId: inserted.insertedId.toHexString(),
          filenames: imagePaths,
        });
      } catch (err) {
        console.error("Insert failed:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    }
    }
  );
}
