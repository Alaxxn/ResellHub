import type { IApiPostData } from "../../backend/src/shared/ApiPostData";
import { Post } from "./Post.tsx";

interface ContentProp {
  data: IApiPostData[];
  isProfile: boolean;
  user: string;
  loading: boolean;
  error: boolean;
}

export function Feed(props: ContentProp) {
  const postsToRender = props.isProfile
    ? props.data.filter((post) => post.username === props.user)
    : props.data;

  return (
    <div>
      <div className="header">
        <h1>{props.isProfile ? `${props.user}'s Posts` : "For You"}</h1>
      </div>

      <div className="content">
        {props.loading ? (
          <h2>Loading...</h2>
        ) : (
          postsToRender.map((post) => (
            <Post
              key={post.id}
              username={post.username}
              title={post.title}
              category={post.category}
              price={post.price}
              description={post.description}
              images={post.images}
            />
          ))
        )}
      </div>
    </div>
  );
}