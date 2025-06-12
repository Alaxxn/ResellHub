export interface PostData {
    id: string;
    username: string;
    title: string;
    category: "electronics" | "clothing" | "other";
    price: number;
    description: string;
    images: string[];
}


export interface IUserData {
    id: string,
    username: string
}

export const POSTS: PostData[] = [
  {
    id: "0",
    username: "garagehunter88",
    title: "Vintage Sony Walkman",
    category: "electronics",
    price: 15,
    description: "Found this classic Sony Walkman in a box of old tech. Fully working with headphones included!",
    images: [
      "https://rvb-img.reverb.com/image/upload/s--hb74V8xL--/a_270/f_auto,t_large/v1712303854/bsyp4nz1ycl5yewlpp27.jpg"
    ]
  },
  {
    id: "1",
    username: "thriftqueen",
    title: "Levi’s 501 Denim Jeans",
    category: "clothing",
    price: 8,
    description: "Snagged these original 501s at a Goodwill! Barely worn, authentic stitching and button fly.",
    images: [
      "https://i.ebayimg.com/images/g/cVwAAOSwxlhltASh/s-l1200.jpg"
    ]
  },
  {
    id: "2",
    username: "Alaxxn",
    title: "Polaroid Land Camera 1000",
    category: "electronics",
    price: 20,
    description: "Classic Polaroid instant camera with rainbow stripe. Great for display or retro photography lovers.",
    images: [
      "https://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/swwAAOSw8~Zfu7Wf/$_57.JPG?set_id=8800005007"
    ]
  },
  {
    id: "3",
    username: "finderskeepers",
    title: "Retro Adidas Windbreaker",
    category: "clothing",
    price: 12,
    description: "1990s Adidas windbreaker in bold colors. Good condition with zip pockets and full lining.",
    images: [
      "https://i.ebayimg.com/images/g/y7kAAOSwEbtlnlFM/s-l1200.jpg"
    ]
  },

  {
    id: "5",
    username: "neighborhoodpicker",
    title: "Apple iPod Classic 80GB",
    category: "electronics",
    price: 25,
    description: "Found this iPod Classic in great shape at a flea market. Still turns on and holds charge!",
    images: [
      "https://i.ebayimg.com/images/g/nO8AAOSwimRi6fhP/s-l1200.jpg"
    ]
  },
  {
    id: "7",
    username: "Alaxxn",
    title: "Rare Pokémon Cards Bundle",
    category: "other",
    price: 10,
    description: "Yard sale haul of 100+ cards, including a few holographics. Worth digging through!",
    images: [
      "https://i.ebayimg.com/images/g/glEAAOSwjKxjLgQL/s-l400.jpg",
      "https://i.ebayimg.com/images/g/deoAAOSwKY9epbqu/s-l400.jpg",
      "https://p1.liveauctioneers.com/7452/341241/186492374_1_x.jpg?height=282&quality=70&sharpen=true&version=1727799165",
      "https://preview.redd.it/any-guesses-on-how-much-my-binder-of-cards-might-be-worth-i-v0-8ib666933x0a1.jpg?width=640&crop=smart&auto=webp&s=915272a6233f70d7595760e0733be0340b61fc26"
    ]
  }
];


let fetchCount = 0;
export function fetchDataFromServer() {
    fetchCount++;
    console.log("Fetching data x" + fetchCount);
    return POSTS;
}
