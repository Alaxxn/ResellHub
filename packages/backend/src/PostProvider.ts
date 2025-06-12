import { MongoClient,  ObjectId, Collection } from "mongodb";

interface IPostDocument {
    _id: ObjectId;
    images: [string];
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

    getAllPost() {
        return this.collection.find().toArray(); // Without any options, will by default get all documents in the collection as an array.
    }
}