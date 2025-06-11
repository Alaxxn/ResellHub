import { useState } from "react";
import {Header} from "./Header.tsx";
import {Feed} from "./Feed.tsx";
import { fetchDataFromServer } from "./MockAppData";
//import {Form} from "./Form.tsx";


function App() {

  const [posts, _updatePost] = useState(fetchDataFromServer());

    return (
        <div>
            <Header></Header>
            <Feed data={posts}></Feed>
        </div>
    );
}

export default App;
