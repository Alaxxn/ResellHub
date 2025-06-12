import profile from './icons/profile.svg';

interface PostProp {
  key : string;
  username: string;
  description: string;
  images: string[];
}

export function Post(props: PostProp) {
  return (
    <div className="post-container">
      <div className="user">
        <img src={profile} alt="Profile" />
        <h1 className="username">{props.username}</h1>
      </div>
      <p>{props.description}</p>
      <div className="post-images">
        {props.images.map((imgUrl, index) => (
          <img key={index} src={imgUrl} alt={`Post image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
