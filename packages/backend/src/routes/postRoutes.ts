import express, { Request, Response } from "express";
import { PostProvider } from "../PostProvider";

export function registerImageRoutes(app: express.Application, postProvider: PostProvider) {

    app.get("/api/post", async (req: Request, res: Response) => {
        function waitDuration(numMs: number): Promise<void> {
          return new Promise(resolve => setTimeout(resolve, numMs));
        }
        const wait = await waitDuration(1000);
        const data = await postProvider.getAllPost()
        res.send(data);
    });
    






}