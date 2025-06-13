import { MongoClient,  ObjectId, Collection } from "mongodb";
import {IApiPostData} from "./shared/ApiPostData";

interface IPostDocument {
    _id: ObjectId;
    images: string[];
    title: string;
    category : string;
    price : number;
    description : string;
    usernameId: string;
}

export class PostProvider {
    private collection: Collection<IPostDocument>

    constructor(private readonly mongoClient: MongoClient) {
        const collectionName = process.env.POSTS_COLLECTION_NAME;
        if (!collectionName) {
            throw new Error("Missing POSTS_COLLECTION_NAME from environment variables");
        }
        this.collection = this.mongoClient.db().collection(collectionName);
    }

    async insertPost(post: IPostDocument) {
        return await this.collection.insertOne(post);
    }

    async getAllPost(): Promise<IApiPostData[]> {
        const docs = await this.collection.find().toArray();

        return docs.map((doc) => ({
            id: doc._id.toHexString(),
            username: doc.usernameId,
            title: doc.title,
            category: doc.category as "electronics" | "clothing" | "other",
            price: doc.price,
            description: doc.description,
            images: doc.images,
        }));
    }
}