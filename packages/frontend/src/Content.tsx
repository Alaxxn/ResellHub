import {Post} from "./Post.tsx";


const data = [
  {
    id: "post1",
    username: "donblahinsignificant",
    description: "Glorptastic zimbloo ranquor blurf! Habbadoop skeeplax flindle cronk.\nSnergle blop vreeblat wumbadoon – quazzle tharnix jibbalo.",
    images: [
      "https://preview.redd.it/cfsziqg41b691.jpg?width=1080&crop=smart&auto=webp&s=7e0fc2e5c9f57a295e0ef92981a359c866f8434b",
      "https://preview.redd.it/nkpxax441b691.jpg?width=640&crop=smart&auto=webp&s=3ef2d8d42e24ec6adbe8f0c5e0cd9c7cf87ff9e6",
      "https://preview.redd.it/kvtpk9141b691.jpg?width=1080&crop=smart&auto=webp&s=4801d95108da721622996738f913511aca3065cd"
    ]
  },
  {
    username: "rockdisagreementfast",
    description: "In this study, we quantify the interspatial flux resonances of pseudo-quantum biofields in simulated antimatter containment matrices. \nResults indicate a 47% increase in pseudo-coherence under low-grav conditions.",
    images: [
      "https://i.ebayimg.com/images/g/FWgAAeSwEcloCAis/s-l1600.webp",
      "https://i.ebayimg.com/images/g/E40AAeSwKphoCAiR/s-l1600.webp",
      "https://i.ebayimg.com/images/g/DxQAAeSw9MBoCAiR/s-l1600.webp",
      "https://i.ebayimg.com/images/g/Ar4AAeSwNoRoCAkM/s-l1600.webp"
    ]
  }
];

export function Content() {
  return (
    <div>
      <div className="header">
        <h1>For You</h1>
      </div>

      <div className="content">
        {data.map((post) => (
          <Post
            username={post.username}
            description={post.description}
            images={post.images}
          />
        ))}
      </div>
    </div>
  );
}


