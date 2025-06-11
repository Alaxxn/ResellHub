import type { PostData } from "./MockAppData.ts";
import { Post } from "./Post.tsx";

interface ContentProp {
  data: PostData[];
}

export function Feed(props: ContentProp) {
  return (
    <div>
      <div className="header">
        <h1>For You</h1>
      </div>

      <div className="content">
        {props.data.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            description={post.description}
            images={post.images}
          />
        ))}
      </div>
    </div>
  );
}
