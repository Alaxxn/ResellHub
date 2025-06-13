export interface IApiPostData {
    id: string;
    username: string;
    title: string;
    category: "electronics" | "clothing" | "other";
    price: number;
    description: string;
    images: string[];
}


export interface IApiUserData {
    id: string,
    username: string
}

