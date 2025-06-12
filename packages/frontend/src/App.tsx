import { useState } from "react";
import {Feed} from "./Feed.tsx";
import { Routes, Route } from "react-router";
import { fetchDataFromServer } from "./MockAppData";
import { ValidRoutes } from "../../backend/src/shared/ValidRoutes";
import { MainLayout } from "./MainLayout";
import { UploadPage } from "./UploadPage";

function App() {

  const [posts, _updatePost] = useState(fetchDataFromServer);
  
    return (
        <Routes>
        <Route path={ValidRoutes.HOME} element={<MainLayout />} >
            <Route index element={<Feed data={posts}/>} />
            <Route path={ValidRoutes.UPLOAD} element={<UploadPage/>} />
            <Route path={ValidRoutes.PROFILE} element={<h1> TODO </h1>} />
            <Route path={ValidRoutes.LOGIN} element={<div> TODO </div>} />
            <Route path={ValidRoutes.REGISTER} element={<div> TODO </div>} />
        </Route> 
        </Routes>
    );
}

export default App;
