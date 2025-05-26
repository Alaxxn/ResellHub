import {Post} from "./Post.tsx";

export function Content() {
    return (
    <div>
        <div className="header">
            <h1>For You </h1>
        </div>

    <div className="content">
        <Post username="Test" description="something here"></Post>
    </div>

    </div>
    );
}



