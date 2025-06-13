import profile from './icons/profile.svg';

interface PostProp {
  key : string;
  username: string;
  title: string;
  category: "electronics" | "clothing" | "other";
  price: number;
  description: string;
  images: string[];
}

export function Post(props: PostProp) {

  console.log(props.images);
  
  return (
    <div className="post-container">
      <div className="user">
        <img src={profile} alt="Profile" />
        <h1 className="username">{props.username}</h1>
      </div>
      <h1>{props.title}</h1>
      <p> <u>Category</u> : {props.category}</p>
      <p>$ {props.price}</p>
      <p> <u>Description</u> : {props.description}</p>
      <div className="post-images">
        {props.images.map((filename, index) => (
          <img key={index} src={`/images/${filename}`} alt={`Post image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
