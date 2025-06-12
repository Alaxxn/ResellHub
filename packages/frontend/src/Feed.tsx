import type { PostData } from "./MockAppData.ts";
import { Post } from "./Post.tsx";

interface ContentProp {
  data: PostData[];
  isProfile : boolean;
  user: string;
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
          {postsToRender.map((post) => (
            <Post
              key={post.id}
              username={post.username}
              title={post.title}
              category={post.category}
              price={post.price}
              description={post.description}
              images={post.images}
            />
          ))}
        </div>
      </div>
  );
}
