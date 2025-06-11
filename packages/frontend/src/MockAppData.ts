export interface PostData {
    id: string;
    username: string;
    description: string;
    images: string[];
}

export interface IUserData {
    id: string,
    username: string
}

const POSTS: PostData[] = [
    {
        id: "0",
        username: "chunkylover23",
        description: "Blue merle herding sheep Blue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheepBlue merle herding sheep",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg"
        ]
    },
    {
        id: "1",
        username: "chunkylover23",
        description: "Huskies",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Huskiesatrest.jpg/2560px-Huskiesatrest.jpg"
        ]
    },
    {
        id: "2",
        username: "chunkylover23",
        description: "Shiba",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/6/6b/Taka_Shiba.jpg"
        ]
    },
    {
        id: "3",
        username: "silas_meow",
        description: "Tabby cat",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/2560px-Felis_catus-cat_on_snow.jpg"
        ]
    },
    {
        id: "4",
        username: "fulffycoat",
        description: "Chickens",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/8/84/Male_and_female_chicken_sitting_together.jpg"
        ]
    }
];

let fetchCount = 0;
export function fetchDataFromServer() {
    fetchCount++;
    console.log("Fetching data x" + fetchCount);
    return POSTS;
}
